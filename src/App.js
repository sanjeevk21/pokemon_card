import React from 'react';
import './App.css';
//import Pokecard from './Pokecard';
import Pokedex from './Pokedex';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;
