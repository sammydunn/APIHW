'use strict'


console.log("loading address.js");

let getButton = document.getElementById("getUsersButton");
getButton.addEventListener('click', function(){
  console.log('Get Users Button got clicked');

console.log("before calling the api");
let fetchResults = fetch("https://randomuser.me/api/");//insert randomuser.me/api/ link

let jsonResponse = fetchResults.then(function(response){
  console.log("processing the result",response);
  return response.json();
})

let jsonResponse = fetchResults.then(function(response){
  console.log("processing the result",response);
  return response.json();
}) 

jsonResponse.then(function(response){
  //Print out the first name of the user in position[0] in the results array
  console.log("The number of users", json.results.length);
 
})

console.log("after calling the api");


})

let processUsers = function(users){
  //update the html page to list the users on page
}

//a list of ten users with their name and picture when button clicked
//when clicked on user list users information
//using an api fetch and act on the return 

//write a processUsers function
//how to access more than one user at a time??
//