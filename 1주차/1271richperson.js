const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (line) {
	let [n, m] = line.split(' ').map((X) => BigInt(X));
	console.log(n / m + '\n' + (n % m));
}).on('close', function () {
	process.exit();
});
