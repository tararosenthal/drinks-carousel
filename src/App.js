import './App.css';
import InputForm from './InputForm';
import { useState, useLayoutEffect } from 'react';
// import {getCocktails} from './Utils';
import Cocktail from './Cocktail';
import CocktailCarousel from './CocktailCarousel';

function App() {
  const [requestData, setRequestData] = useState();
  const [responseData, setResponseData] = useState([]);

  const childToParent = ((childData) => {
    setRequestData(childData);
  });

  useLayoutEffect(() => {
    if (requestData) {
      let cocktails = [];
      fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${requestData}`)
      .then((response) => response.json())
      .then((data) => {
      for (const index in data.drinks) {
        let cocktail = new Cocktail(data.drinks[index]);
        cocktails.push(cocktail);
      }
      })
      .then(() => {
        setResponseData(cocktails);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
    }
  }, [requestData]);

  if (!responseData || !requestData) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Which Cocktail?</h1>
          <InputForm childToParent={childToParent}/>
        </header>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Which Cocktail?</h1>
          <InputForm childToParent={childToParent}/>
          <CocktailCarousel slides = {responseData}/>
        </header>
      </div>
    );
  }
}

export default App;
