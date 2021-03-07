
let getButton = document.getElementById("ingredientInput");
getButton.addEventListener('click', function(){
  console.log('Button got clicked');

let submitText = document.getElementById('LiquorOfChoice');
let liquor = submitText.nodeValue;

  console.log("before calling the api");

let fetchResults = fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin", liquor);
console.log(fetchResults);

let jsonResponse = fetchResults.then(function(response){
  console.log("processing the result",response);
  return response.json();
})

jsonResponse.then(function(json){
  console.log("Drink Results",json);

  ul = document.createElement('ul');

  document.getElementById('myItemList').appendChild(ul);

  let array = json.drinks;

  for (i = 0; i < array.length; i++) {
      let element = array[i].strDrink;
      let li = document.createElement('li');
      ul.appendChild(li);

      li.innerHTML += element;
  };
})


})
