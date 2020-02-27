import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pokemons from './containers/Pokemons/Pokemons';
import Pokemon from './containers/Pokemon/Pokemon';
import './App.scss';

class App extends React.Component {


  state = {
    pokemons: []
  }

  componentDidMount(){

    fetch('https://pokeapi.co/api/v2/generation/1/',)
    .then((res) => res.json())
    .then(res => {
      this.setState({
        pokemons: res.pokemon_species,
      })
      console.log(this.state.pokemons)
    })
    .catch(err => console.log(err.message))

  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route 
            exact path={'/'} 
            render={(props) => <Pokemons {...props} pokemons={this.state.pokemons}/>}
          />
          <Route exact path={'/pokemons/:id'} component={Pokemon} />
          {/*<Pokemons pokemons={this.state.pokemons} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
