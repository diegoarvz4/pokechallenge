import React, { useEffect, useState } from 'react';

export default ( { name, url, toPokemon }) => {

  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+name)
    .then(res => res.json())
    .then(res => setImgUrl(res.sprites.front_default))
  }, []);


  return (
  <div className="Pokemons-pokemon" onClick={() => toPokemon(name)}>
    <img alt={name} src={imgUrl}/>
    <h3>{name}</h3>
  </div>
)}