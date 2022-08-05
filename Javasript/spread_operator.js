//spread operator

// Spread syntax can be used when all elements from an object or array need to be included 
// in a new array or object, or should be applied one-by-one in a function call's arguments list.
// There are three distinct places that accept the spread syntax:

// Function arguments list (myFunction(a, ...iterableObj, b))
// Array literals ([1, ...iterableObj, '4', 'five', 6])
// Object literals ({ ...obj, key: 'value' })


//the array and objects in js is reference type if change in one array it will reflect in another

var a = [1,3,5,6,8]
var b = a
a[0] = 9 // here i'm changing 1st element in a but its also reflecting in b so to avoid this we need spread opr
console.log(a)
console.log(b)

var a = [1,3,5,6,8]
var b = [...a]
a[0] = 9 
console.log(a)
console.log(b)

var a = [1,3,5,6,8]
var b = [...a,45,33,55] //here we can also add an extra elemnts to the existing array
var c = [...a,...b]

console.log(a)
console.log(b)
console.log(c)

//////////objects///////////////////

var a = {
	name: 'javascript',
	duration: '3 months',
	tutorial: 'geekforgeeks'
};

var b = {...a}

console.log(a)
console.log(b)