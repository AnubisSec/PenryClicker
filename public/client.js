
//Prints to the console that the funciton is being loaded properly
console.log("Client side code running....");


//Using the penryButton button created in the index, it is "listening" for a click event
//Once clicked, it prints to the console "Button was clicked"
var button = document.getElementById('penryButton');
button.addEventListener('click', function(e) {
  console.log('Button was clicked!');

  fetch('/clicked', {method: 'POST'})
  .then(function(response) {
    if(response.ok) {
      console.log('Click was recorded');
      return;
    }
    throw new Error('Request Failed...');
  })
  .catch(function(error) {
    console.log(error);
  });
});

//This just queries the database every second to get data 
setInterval(function() {
  fetch('/clicked', {method: 'GET'})
  .then(function(response) {
    if(response.ok) return response.json();
    throw new Error('Request Failed :(');
  })
  .then(function(data) {
    document.getElementById('counter').innerHTML = `Penry was booped ${data.length} times`;
  })
  .catch(function(error) {
    console.log(error);
  });
}, 1000);
