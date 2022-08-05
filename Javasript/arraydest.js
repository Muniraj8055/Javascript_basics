
// array destructuring

var a = ['javascript','6 months','MERN']
var[course,duration,techstack] = a

console.log(course)
console.log(duration)
console.log(techstack)

var[course,,techstack] = a // if we want to skip middle value leave it empty

var a,b
[a,b = 20] = [10] // giving default value

var a,b
[a=1,b = 20] = [10] //it will overwrite and give a=10



// array passing to function function

var arr = [3,4,6,7,8]

function show([val1,val2,val3]){
    console.log(val1)
    console.log(val2)
    console.log(val3)
}
show(arr)


//By using spread operator we can print all the elements in array

var arr = [3,4,6,7,8,6,7,78,9,0]

function show([...val]){
    console.log(val) 
}
show(arr)


//Nested array destructuring

var a = ['java','python','c','c++',['perl','shellscript']] // array will be like [0] [1] [2] [3] [4][0] [4][1]
var [a1,a2,a3,a4,[b1,b2]] = a

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(b1)
console.log(b2)
