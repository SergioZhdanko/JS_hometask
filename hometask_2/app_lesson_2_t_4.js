'use strict';
    	let num1 = Number(prompt("Введите первое число"));

    	let num2 = Number(prompt("Введите второе число"));
		
		/**
		 * Function returns sum of 2 didgits
		 * @param {number} a is the first summand
		 * @param {number} b is the second summand
		 * @returns {number}
 		 */
 		const getSum = (a, b) => {
 			return a + b;
 		};

 		/**
		 * Function returns diff of 2 didgits
		 * @param {number} a is a minuend
		 * @param {number} b is a subtract
		 * @returns {number}
 		 */
 		const getDiff = (a, b) => {
 			return a - b;
 		};

 		/**
		 * Function returns factum of 2 didgits
		 * @param {number} a is the first mult
		 * @param {number} b is the second mult
		 * @returns {number}
 		 */
 		const getFactum = (a, b) => {
 			return a * b;
 		};

 		/**
		 * Function returns ratio of 2 didgits
		 * @param {number} a is a dividend
		 * @param {number} b is a divider
		 * @returns {number}
 		 */
 		const getRatio = (a, b) => {
 			return a / b;
 		};

 		alert(`Сумма чисел ${num1} и ${num2} равна: ${getSum(num1, num2)}`);

 		alert(`Разность чисел ${num1} и ${num2} равна: ${getDiff(num1, num2)}`);

 		alert(`Произведение чисел ${num1} и ${num2} равно: ${getFactum(num1, num2)}`);

 		alert(`Частное деления числа ${num1} на число ${num2} равно: ${getRatio(num1, num2)}`);