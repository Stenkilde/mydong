#!/usr/bin/env node
const prompt = require('prompt');
const ncp = require('copy-paste');
const program = require('commander');
const chalk = require('chalk');

let dongers = [
	{
		id: 1,
		name: 'tableflip',
		code: '(╯°□°)╯︵ ┻━┻'
	},
	{
		id: 2,
		name: 'shrug',
		code: '¯\\_(ツ)_/¯'
	},
	{
		id: 3,
		name: 'fightme',
		code: '(ง’̀-‘́)ง'
	},
	{
		id: 4,
		name: 'tablereverse',
		code: '┬━┬﻿ ノ( ゜¸゜ノ)'
	},
	{
		id: 5,
		name: 'lenny',
		code: '( ͡° ͜ʖ ͡°)'
	}
];

program
	.option('-d, --dong [type]', 'Add the specified type of dong [marble]', 'marble')
	.option('-l, --list', 'List of all the dongs possible to use')
	.parse(process.argv);

if (process.argv[2] === '-l') {
    let allDongs = dongers.map(function(dong) {
       console.log(dong.name, dong.code);
    });
}

if (process.argv[2] === '-d') {
    console.log(chalk.bold.green('You asked for the following dong: ', program.dong));
    
    let argumentDong = dongers.filter(dong => dong.name === program.dong);
    
    if (argumentDong.length > 0) {
        ncp.copy(argumentDong[0].code, function() {
            console.log(chalk.bold.green('We saved him to your clipboard!'));
            console.log(chalk.bold.cyan(argumentDong[0].code));
        })
        return;
    }
} else {
    prompt.start();
    
    prompt.message = 'Hello sir';
    
    prompt.get({
        properties: {
            dong: {
                description: 'Which dong do you want today?'
            }
        }
    }, function (err, result) {
        let filteredDong = dongers.filter(dong => dong.name === result.dong);
        let escapedDong = filteredDong.shift().code;
        ncp.copy(escapedDong, function() {
            console.log(chalk.bold.cyan('We saved him to your clipboard!'));
        })
        console.log(escapedDong);
    });
}