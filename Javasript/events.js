//Event binding
// addEventListener()

// This method is introduced by DOM2 used to engage an event handler in a page.
// syntax: 
//    Object.addEventListener(event,handler,capturePase)
   
// where,
//   object is the node to which listener is to be bound
//   event is a string indicating the type of event
//   handler is the fun should called when event occurs
//   capturePhase is boolean indicating whether to use Bubbling(false) or Capture(true),this is optional

//advantages 
//it allows u to bind multiple handlers to an object for the same events

var btn = document.getElementById("mybtn")
btn.addEventListener("click", function(){ alert("button clicked")})

//Event object

