import React from 'react';

export default class Pokemon extends React.Component{

  state = {
    name: '',
    abilities: [],
    urlSprite: ''
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon/"+this.props.match.params.id)
    .then(res => res.json())
    .then(res => {
      this.setState({
        name: res.name,
        abilities: this.getAbilities(res),
        urlSprite: res.sprites.front_default,
      })
    })
    .catch(err => console.log(err.message))
  }

  getAbilities = (res) => {
    const abs = []
        for(let i = 0; i < res.abilities.length; i+= 1) {
          abs.push(res.abilities[i].ability.name)
        }
        return abs;
  }

  render(){
    return(
      <div>
        <h2>{this.state.name}</h2>
        <img alt={this.state.name} src={this.state.urlSprite}/>
        <h3>Abilities</h3>
        <ul>
          {
            this.state.abilities.map((ab,idx) => (
              <span key={ab+idx}>{ab}</span>
            ))
          }
        </ul>
      </div>
    )
  }


}