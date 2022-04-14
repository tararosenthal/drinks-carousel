import Cocktail from "./Cocktail";
import SliderParent from "./SliderParent";

class CocktailController {
  constructor (cocktailChoice) {
    this.setCocktails(cocktailChoice);
  }

  cocktailCollection = [];

  getCocktails(cocktailChoice) {
    console.log('cocktail choice: ' + cocktailChoice);

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailChoice}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const index in data.drinks) {
        console.log('drink: ' + index);
        this.cocktailCollection.push(new Cocktail(data.drinks[index]));
        console.log(data.drinks[index]);
      }
      // document.querySelector('h2').innerText = data.drinks[0].strDrink;
      // document.querySelector('img').src = data.drinks[0].strDrinkThumb;
      // document.querySelector('h3').innerText = data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });

    SliderParent.data = (this.sendCocktails());
    console.log('sent data: ' + SliderParent.data);
  }

  sendCocktails() {
    let cocktailNames = [];

    for (const cocktail of this.cocktailCollection) {
      cocktailNames.push(cocktail.getName());
    }

    return cocktailNames;
  }
}

export default CocktailController;
