function solution(n) {
	for (let i = 0; i < n.length - 1; i++) {
		for (let j = 0; j < n.length - i - 1; j++) {
			if (n[j] > n[j + 1]) {
				let jail = n[j];
				n[j] = n[j + 1];
				n[j + 1] = jail;
			}
			console.count('try');
		}
		console.log(n);
	}
}

solution([1, 3, 5, 7, 4, 9, 6, 2, 8]);

//입출력 예시

//입력 : [1, 3, 5, 7, 4, 9, 6, 2, 8]
//출력 : [1, 2, 3, 4, 5, 6, 7, 8, 9]
