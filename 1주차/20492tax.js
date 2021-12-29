const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (line) {
	let N = Number(line);
	let result1 = N - N * 0.22;
	let result2 = N - N * 0.22 * 0.2;
	console.log(`${result1} ${result2}`);
}).on('close', function () {
	process.exit();
});
