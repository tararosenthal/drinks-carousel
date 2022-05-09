import './App.css';
import InputForm from './InputForm';
import { useState } from 'react';
import Cocktail from './Cocktail';
import CocktailCarousel from './CocktailCarousel';

function App() {
  const [requestData, setRequestData] = useState();

  async function processCocktailRequest(cocktailRequest) {
      let cocktails = [];
      await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailRequest}`)
      .then((response) => response.json())
      .then((data) => {
      for (const index in data.drinks) {
        let cocktail = new Cocktail(data.drinks[index]);
        cocktails.push(cocktail);
      }
      setRequestData(cocktails);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  }

  if (!requestData || requestData.length < 1) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Which Cocktail?</h1>
          <InputForm processCocktailRequest={processCocktailRequest}/>
        </header>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Which Cocktail?</h1>
          <InputForm processCocktailRequest={processCocktailRequest}/>
          <CocktailCarousel slides = {requestData}/>
        </header>
      </div>
    );
  }
}

export default App;
