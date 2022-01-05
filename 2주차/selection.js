function solution(n) {
	for (let i = 0; i < n.length - 1; i++) {
		let idx = i;
		for (let j = i; j < n.length; j++) {
			if (n[j] < n[idx]) {
				idx = j;
			}
		}
		let jail = n[idx];
		n[idx] = n[i];
		n[i] = jail;
	}
	console.log(n);
}

solution([17, 25, 23, 25, 1, 1, 79, 59, 100]);
