// console.log("This is Example for callback function ")

// //pretend that this response is from server

// const students =[
//     {name: "harry" , sub:"Java"},
//     {name: "Muni" , sub:"JavaScript"}
// ]

// function enrollStudents(student, callback){
//     setTimeout(() => {
//         students.push(student)
//         console.log("Students has been enrolled")
//         callback()
//     },3000);
// }

// function getStudents(){
//     setTimeout(() => {
//         let str = ''
//         students.forEach((student)=>{
//             str += `<li>${student.name}</li>`
//         })
//          document.getElementById('students').innerHTML = str
//     }, 1000);
// }
// let newStd = {name:"shreys", sub:"python"}
// enrollStudents(newStd,getStudents)
// // getStudents()

console.log("This is Example for promises")

//pretend that this response is from server

const students =[
    {name: "harry" , sub:"Java"},
    {name: "Muni" , sub:"JavaScript"}
]

function enrollStudents(student){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student)
            console.log("Students has been enrolled")
            let err=false
            if(!err){
                resolve()
            }
            else{
                reject()
            }
        },3000);
    })
   
}

function getStudents(){
    setTimeout(() => {
        let str = ''
        students.forEach((student)=>{
            str += `<li>${student.name}</li>`
        })
         document.getElementById('students').innerHTML = str
    }, 1000);
}
let newStd = {name:"shreys", sub:"python"}
enrollStudents(newStd).then(()=>{
    getStudents()
}).catch((err)=>{
    console.log("err occured")
})
// getStudents()