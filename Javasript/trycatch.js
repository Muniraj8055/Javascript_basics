//the code which cause err will writtn in try block
//in catch block we will write code for handle the err

try{

      //in which line u will got err after that line the code will never going to execute 
    add() // err caught in this line
    console.log("this line is going to skipp")
  
    
}
catch(e){
    console.log("message: " + e.message ) //it will display err msg
    console.log("Name: " + e.name )  //it will display err name
    console.log("Stack: " + e.stack )  //it will display err stack
// }
// catch(e){
//     console.log("undefined fun")
// }
