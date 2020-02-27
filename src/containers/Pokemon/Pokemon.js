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
      <div className="Pokemon">
        <h2>{this.state.name}</h2>
        <img alt={this.state.name} src={this.state.urlSprite}/>
        <div className="Pokemon-properties">
          <h4>Abilities</h4>
          <ul>
            {
              this.state.abilities.map((ab,idx) => (
                <li key={ab+idx}>{ab}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }


}