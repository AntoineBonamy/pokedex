import './App.css'
import {useState} from 'react';
import PokemonCard from "./components/PokemonCard"



function App() {
  const pokemonList = [
    {
      name: "Bulbizarre",
      number: "001",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    
    {
      name: "Salamèche",
      number: "004",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },

    {
      name: "Carapuce",
      number: "007",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },

    {
      name: "Pikachu",
      number: "025",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },

    {
      name: "Mew",
      number: "???",
    },
  ];
  
  //pokemonIndex = pokemonList[0];
  let i = 0;

  const [pokemonIndex, setPokemonIndex] = useState(pokemonList[i]);
  console.log(pokemonIndex);
  const handleClickDown = () => {
    setPokemonIndex(i - 1)
  }

  const handleClickUp = () => {
    setPokemonIndex(i + 1)
  }
  
  const pokemon = pokemonList[i]

  
  return (
    <div>
      <p>{i}</p>
      <PokemonCard pokemonArg={pokemon}/>
      <button onClick={handleClickDown}>Précédent</button>
      <button onClick={handleClickUp}>Suivant</button>
    </div>
  );
}

export default App;