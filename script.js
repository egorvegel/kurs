
let btn = document.querySelector('.btn');
let input = document.querySelector('.num');
let arrayFirst = document.querySelector('.array');
let arraySort = document.querySelector('.array_sort');
let time = document.querySelector('.time');
let n;

btn.addEventListener('click', function (evt) {
	let array = [];
	let arrayInComplete = [];
	let arrayComplete = [];

	evt.preventDefault();
	n = input.value;

	for (let i = 0; i < n; i++) {
		array[i] = Math.round(Math.random() * 1000 + 1000);

		if (i < 20) {
			arrayInComplete.push(array[i]);
		}
	}

	arrayFirst.textContent = arrayInComplete + "...." + array[array.length - 1];


	const start = new Date().getTime();
	for (let i = 0; i < array.length; i++) {
		for (let k = 0; k < array.length; k++) {
			if (array[k] > array[k + 1]) {
				let tmp = array[k];
				array[k] = array[k + 1];
				array[k + 1] = tmp;
			}
		}
	}

	const end = new Date().getTime();


	const dif = end - start;

	for (let i = 0; i < array.length; i++) {
		if (i < 20) {
			arrayComplete.push(array[i]);
		}
	}

	arraySort.textContent = arrayComplete + "...." + array[array.length - 1];
	time.textContent = dif + " ms"
})



// 270  МС в среднем


