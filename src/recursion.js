/* jshint esversion: 6 */

// Solve the following prompts using recursion.



/** REQUIRED EXERCISES (1-20) **/


// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n === 0) { 
		return 1 
	} else if (n > 0) {
		return n * factorial(n-1)
	} else {
		return null
	};
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if (array.length === 0) {
		return 0
	} else if (array.length === 1) {
		return array[0];
	} else {
	return array[0] + sum(array.slice(1))
	};
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if (array.length === 0) {
		return 0
	} else if (array.length === 1) {
			if (typeof array[0] === 'number') {
				return array[0];
			} else if (Array.isArray(array[0])) {
				return arraySum(array[0]);
			};
	} else {
		return arraySum(array.slice(0,1)) + arraySum(array.slice(1));
	};
};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n === 0) {
		return true
	} else if (Math.abs(n) === 1){
		return false
	} else {
		return isEven(n - (2 * Math.sign(n)))
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n === 1 * Math.sign(n) || n === 0) {
		return 0;
	} else {
		return (n - (1 * Math.sign(n))) + sumBelow(n - (1 * Math.sign(n)));
	};
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if (Math.abs(y - x) <= 1) { 
		return [] 
	} else if (y - x > 1) {
		return [x + 1].concat(range(x + 1, y))
	} else if (x - y > 1) {
		return [x - 1].concat(range(x - 1, y))
	};
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp < -1) {
		return (1 / exponent(base, exp * -1));
	} else if (exp === 0) {
		return 1;
	} else {
		return base * exponent(base, exp-1);
	};
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1) {
		return true;
	} else if (n === 0 || n % 2 !== 0) {
		return false;
	} else if (n % 2 === 0) {
		return powerOfTwo(n/2);
	};
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if (string.length === 1) {
		return string 
	} else {
		return string[string.length-1] + reverse(string.slice(0, string.length-1)); 
	};
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.trim().toLowerCase();
	if (string.length <= 1) {
		return true 
	} else if (string[0] === string[string.length-1]) {
		return palindrome(string.slice(1,string.length-1));
	} else {
		return false;
	};
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	var posx = x - x < x ? x : (x - x) - x;
	var posy = y -y < y ? y : (y - y) - y;
	if (y === 0) {
		return NaN
	} else if (y === 1 || y === -1) {
		return 0 
	} else if (posx < posy) {
		return x
	} else {
		if (x - y >= 0) {
			return modulo(x - y, y)
		} else {
			return modulo (x + posy, y)
		}
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (x < 0 && y < 0) {
		return multiply(x - x - x, y - y - y)
	} else if (y === 0) {
		return 0;
	} else if (y === 1) {
		return x;
	} else if (y > 1) {
		return x + multiply(x, y - 1);
	} else if (y < 1) {
		var negx = x < 0 ? x : x - x - x;
		return negx + multiply(x, y + 1);
	};
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
	var posx = x - x < x ? x : (x - x) - x;
	if (y === 0) {
		return undefined;
	} else if (y === 1) {
		return x;
	} else if (x === 0 || (posx < y)) {
		return 0;	
	} else if (x < 0 && y < 0) {
		return divide(-x, -y)
	} else if (x > 0 && y > 0) {
		return divide(x - y, y) + 1;
	} else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
		return divide(x + y, y) - 1;
	};
};




// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if (x === y) {
		return x;
	} else if (x < 0 || y < 0) {
		return null; 
	} else if (x > y) {
		return gcd(x - y, y);
	} else {
		return gcd(x, y - x);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length <= 1 || str2.length <= 1) {
		if (str1.length !== str2.length) {
			return false;
		} else {
			return (str1[0] === str2[0]);
		};
	} else {
		return compareStr(str1.slice(1), str2.slice(1));
	};
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if (str.length === 0) {
		return [];
	} else {
	return createArray(str.slice(0, str.length-1)).concat(str[str.length-1]);
	};
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	if (array.length <= 1) {
		return array;
	} else if (array.length === 2) {
		return [array[1], array[0]];
	} else {
		return reverseArr(array.slice(1)).concat([array[0]]);
	};
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if (length === 0) {
		return [];
	} else {
		return buildList(value, length-1).concat([value]);
	};
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if (n === 1) {
		return ['1'];
	} else {
		var newVal;
		if (modulo(n, 3) === 0) {
			if (modulo(n, 5) === 0) {
				newVal = 'FizzBuzz';
			} else {
			newVal = 'Fizz';
			};
		} else if (modulo(n, 5) === 0) {
			newVal = 'Buzz'
		} else {
			newVal = n.toString();
		};
		return fizzBuzz(n-1).concat([newVal]);
	};
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if (array.length === 0) {
		return 0;
	} else if (array.length === 1) {
		if (array[0] === value) {
			return 1;
		} else {
			return 0;
		};
	} else {
		if (array[array.length-1] === value) {
			return countOccurrence(array.slice(0, array.length-1), value) + 1;
		} else {
		return countOccurrence(array.slice(0, array.length-1), value)
		};
	};
};





/** OPTIONAL EXERCISES (21-40) **/


// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	// base case: array is slice of just one element
	if (array.length === 1) {
		// return callback on that element
		return [callback(array[0])];
		// return result of that call
	} else {
		// non-base case: array is slice of 2+ elements
		// recursion: return callback on first element concat callback remaining slice
		return [callback(array[0])].concat(rMap(array.slice(1), callback));
	}
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

// test case: {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'}

var countKeysInObj = function(obj, key) {
	var currKeys = Object.keys(obj);
	if (currKeys.length === 1) {
		return +(currKeys[0] === key);
	} else {
		var subTotal = 0;
		for (var k in obj) {
			subTotal += +(k === key) + countKeysInObj(obj[k], key)
		}
		return subTotal;
	}
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

var countValuesInObj = function(obj, value) {
	var currKeys = Object.keys(obj);
	if (currKeys.length === 1 && typeof obj[currKeys[0]] !== 'object') {
		return +(obj[currKeys[0]] === value);
	} else {
		var subTotal = 0;
		for (var k in obj) {
			subTotal += countValuesInObj(obj[k], value)
		}
		return subTotal;
	}
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	var currKeys = Object.keys(obj);
	if (currKeys.length === 1 && typeof obj[currKeys[0]] !== 'object') {
		if (currKeys[0] === oldKey) {
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}
	} else { 
		for (var k in obj) {
		    replaceKeysInObj(obj[k], oldKey, newKey);
			if (k === oldKey) {
				obj[newKey] = obj[oldKey];
				delete obj[oldKey];
			}
		}
	}
	return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if (n < 1) { return null; }
	if (n === 1) { return [0, 1]; }
	var prevFib = fibonacci(n-1);
	var prevLen = prevFib.length;
	return prevFib.concat(prevFib[prevLen - 1] + prevFib[prevLen - 2]);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) { return null; }
	if (n === 0) { return 0 }
	if (n === 1) { return 1; }	
	return nthFibo(n-1) + nthFibo(n-2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	var obj = obj || {};
	if (str === '') { return obj }
	obj[str[0]] = obj[str[0]] + 1 || 1;
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	if (list.length < 2) { return list; }
	if (list[0] === list[1]) { return compress(list.slice(1)); }
	return [list[0]].concat(compress(list.slice(1)));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
