//map() method

// The map() method  calls a provided callback function once for each element in an array, in order, and
// returns the new array from the results

// syntax :  map(callback(currentVal, index, array), thisArg)



arr = [2,4,5,6,7]

arr.map((value , i ) => {  // i is index
  //console.log(value)// here it will display value
  console.log(i) //here it will display the index of array
})

var arr = [
    { price: "100" , product:"mobile"},
    { price: "200" , product:"box"},
    { price: "300" , product:"pen"},
    { price: "400" , product:"screen"},
]

var newArr = arr.map((value)=>{
   return value.price
})

console.log(newArr)