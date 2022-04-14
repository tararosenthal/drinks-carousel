class Cocktail {
  constructor(cocktailData) {
    this.cocktailData = cocktailData;
  }

  cocktailData = {};

  getName() {
    console.log(this.cocktailData.strDrink);
    return this.cocktailData.strDrink;
  }

  getImage() {
    return this.cocktailData.strDrinkThumb;
  }

  getInstructions() {
    return this.cocktailData.strInstructions;
  }
}

export default Cocktail;
