const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let information = [];
let inputData = [];
rl.on('line', function (line) {
	let process = line.split(' ');
	let result = Number(process[0]) * (Number(process[1]) - 1) + 1;
	console.log(result);
}).on('close', function () {
	process.exit();
});
