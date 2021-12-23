const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// let information = [];
// let inputData = [];
rl.on('line', function (line) {
	let array = line.split(' ');
	let result = Number(array[0]) + Number(array[1]);
}).on('close', function () {
	//console.log('bye');
	process.exit();
});
