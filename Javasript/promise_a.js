// How Promises Work

// A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:

// Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
// Rejected: onRejected() will be called (e.g., reject() was called)
// Pending: not yet fulfilled or rejected

// then()
// then() is invoked when a promise is either resolved or rejected.

// catch()
// catch() is invoked when a promise is either rejected or some error has occurred in execution

//here u need to fetch 
//rollno after 2 sec
//after rollno fetched u need to display name and age




// const obj = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let rollno = [1,3,4,5,6]
//         resolve(rollno)
//         reject("error msg")
//     }, 3000);
// })

// const getData = (index) =>{
//     return new Promise((resolve,reject)=>{
//     setTimeout((index) => {
//         let biodata= {
//             name:"muni",
//             age:23
//         }
//         resolve(`Hii This is my roll no ${index}. 
//         My name is ${biodata.name} and my age is ${biodata.age} years old`)
//     }, 2000,index);

// })
// }


// obj.then((rollno)=>{
//     console.log(rollno)
//     getData(rollno[1]).then((data)=>{
//         console.log(data)
//     })
// }).catch((err)=>{
//     console.log(err)
// })

function fun1(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            let error = true

            if(!error){
                console.log("Your promise has been resolved")
                resolve("promise resolved")
            }
            else{
                console.log("Your promise has not been resolved")
                reject("promise rejected")
            }
        }, 2000);
    })
}

fun1().then(()=>{
    console.log("thanks for resolving")
}).catch((err)=>{
    console.log(err)
})