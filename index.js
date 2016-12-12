#!/usr/bin/env node
const prompt = require('prompt');
const ncp = require('copy-paste');

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
	    		console.log('We saved him to your clipboard!')
	    	})
			console.log(escapedDong);
	});

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
	}
];