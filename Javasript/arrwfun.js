

const myFun = (a,b)=>{
   console.log(a+b) ;

}
myFun(2,4)


//Q1 Write an arrow function expression called greet(). It should accept a single argument 
//representing a person's name. It should return a greeting string as shown below:
const greet = (name)=>{
    return `hello  ${name}`
}
console.log(greet("muni"))

//Q2 Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAvg = (arr) =>{

    let total = 0
    for(let num of arr){
        total+=num
    }
    return total/arr.length
}

let ar = [2,4,5,7,8]
console.log(arrayAvg(ar))

//Q3 Convert the following JavaScript function declaration to arrow function syntax.
//function counterFunc(counter) {
    // if (counter > 100) {
    //     counter = 0;
    //   }else {
    //     counter++;
    //   }
      
    //   return counter;
    // }

const counterFunc = (counter)=>{
    if(counter > 100){
        counter = 0
    }else{
        counter++
    }
    return counter
}

console.log(counterFunc(30))

// Q6 Write an arrow function named sumEvens that accepts an array of 
// numbers and returns the sum of the even numbers in the array. Use a for...of statement.

const sumEvens = (arr) =>{
    let sum = 0
    for(let num in arr){
        if(num%2===0){
            sum+=num
        }
    }
    return sum
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sumEvens(numbers))

// Q9 The following array is given:

// let list=[1,2,3,4,5,6,7,8];

// Use the map() function with arrow notation => to multiply each number by 10 and return the result.

let list = [2,4,5,8,9,5,3]

let result = list.map(num => num*10)
console.log(result)

// Q14 Write an arrow function that will take one parameter weight in Kg. This arrow function will convert Kg to Lbs. Formula is kg*2.2

//     If LBS is > 150, then the function should return "obese"
//     If LBS is between 100 to 150, the function should return "you are ok"
//     If LBS is < 100, then the function should return "underweight"

const weightInLbs = (weightInKg) =>{
  let lbs = weightInKg*2.2
  if (lbs>150){
      return "obese"
  }
  else if(lbs >=100 && lbs<=150){
      return "you r ok"
  }
  else(lbs<100)
      return "you r under weight"
  
}

console.log(weightInLbs(65))

// Q15 Q15 Write an arrow function named arrMax that accepts an array of numbers and 
//returns the largest number in the array. Use the Array.forEach method.

const arrMax = (arr)=>{
    let max = arr[0]
 arr.forEach((num)=>{
     if (num>max){
         max = num
     }
 })
 return max
}

console.log(arrMax([8,4,6,9,20]))