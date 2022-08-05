//step 1


function returnPromises() {
    var newPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("Promise Executed...");
        resolve();
      }, 3000);
    });
  }

  returnPromises()
  
  function ExecuteFunction() {
    var newData = "Mayank";
    var getPromise = returnPromises();
    console.log(newData);
  }
  
  ExecuteFunction()