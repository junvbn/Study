function solution(n) {
	answer = [];

	for (let i = 0; i < n.length; i++) {
		let Min = 999;
		for (let j = 0; j < n.length + i; j++) {
			if (n[j] < Min) {
				Min = n[j];
			}
		}
	}
}

//입출력 예시

//입력 : [1, 3, 5, 7, 4, 9, 6, 2, 8]
//출력 : [1, 2, 3, 4, 5, 6, 7, 8, 9]
