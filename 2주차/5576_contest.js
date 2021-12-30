const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let array = [];
let array2 = [];
rl.on('line', function (line) {
	if (array.length < 10) {
		array.push(Number(line));
	} else {
		array2.push(Number(line));
	}
}).on('close', function () {
	function solution(n) {
		for (let i = 0; i < 3; i++) {
			let idx = i;
			for (let j = i; j < n.length; j++) {
				if (n[j] > n[idx]) {
					idx = j;
				}
			}
			let jail = n[idx];
			n[idx] = n[i];
			n[i] = jail;
		}

		return n;
	}
	let a = solution(array);
	let b = solution(array2);
	console.log(a[0] + a[1] + a[2] + ' ' + (b[0] + b[1] + b[2]));
	process.exit();
});
