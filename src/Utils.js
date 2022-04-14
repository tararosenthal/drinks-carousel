import Cocktail from "./Cocktail";

export function getCocktails(cocktailChoice) {
  console.log('cocktail choice: ' + cocktailChoice);
  let cocktails = [];

  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailChoice}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (const index in data.drinks) {
      console.log('drink: ' + index);
      let cocktail = new Cocktail(data.drinks[index]);
      cocktails[cocktails.length] = cocktail.getName();
      // cocktails.push(cocktail.getName());
      console.log(data.drinks[index]);
      console.log(cocktails[cocktails.length - 1]);
    }
    console.log(cocktails);
    // document.querySelector('h2').innerText = data.drinks[0].strDrink;
    // document.querySelector('img').src = data.drinks[0].strDrinkThumb;
    // document.querySelector('h3').innerText = data.drinks[0].strInstructions;
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });

  return cocktails;
}
