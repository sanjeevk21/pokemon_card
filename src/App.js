import React from 'react';
import './App.css';
//import Pokecard from './Pokecard';
//import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}

export default App;
