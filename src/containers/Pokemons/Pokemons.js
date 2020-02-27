import React from 'react';
import Pokemon from '../../components/Pokemon/Pokemon';
export default class Pokemons extends React.Component {

  toPokemon = (name) => {
    this.props.history.push('/pokemons/'+name)
  }

  render(){

    const { pokemons } = this.props;
    
    return(
      <div className="Pokemons">
        {
          pokemons.map((pokemon, idx) => (
            <Pokemon 
              key={pokemon.name+idx} 
              name={pokemon.name}
              url={pokemon.url}
              toPokemon={this.toPokemon}
            />
          ))
        }
      </div>
    )
  }

}