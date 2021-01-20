'use strict';
    	let num1 = Number(prompt(`Введите первое число`));

    	let num2 = Number(prompt(`Введите второе число`));

    	let mathOperator = String(prompt(`Введите символ математического дейтсвия + для сложения, - для вычитания, * - для умножения, / для деления`));

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

 		/**
		 * Function returns result of math operation
		 * @param {number} arg1 is the first didgit
		 * @param {number} arg2 is the second digit
		 * @param {string} operation is math preation symbol
		 * @returns {number}
 		 */
 		const mathOperation = (arg1, arg2, operation) => {
 			switch(operation) {
	            case "+":
	                return getSum(arg1, arg2);
	                break;
	            case "-":
	                return getDiff(arg1,arg2);
	                break;
	            case "*":
	                return getFactum(arg1, arg2);
	                break;
	            case "/":
	                return getRatio(arg1, arg2);
	                break;
	            default:
	                alert(`Вы ввели некорректный символ математического дейтсвия`);
            }
 		};
		
		alert(`Результат равен: ${mathOperation(num1, num2, mathOperator)}`);