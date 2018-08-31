
//Prints to the console that the funciton is being loaded properly
console.log("Client side code running....");


//Using the penryButton button created in the index, it is "listening" for a click event
//Once clicked, it prints to the console "Button was clicked"
var button = document.getElementById('penryButton');
button.addEventListener('click', function(e) {
  console.log('Button was clicked!');
});
