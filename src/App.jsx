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
  
  const [pokemonIndex, setPokemonIndex] = useState(0);


  
  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  
  

  
  return (
    <div>

      <PokemonCard pokemonArg={pokemonList[pokemonIndex]}/>
      <button onClick={handleClickDown}>Précédent</button>
      <button onClick={handleClickUp}>Suivant</button>
    </div>
  );
}

export default App;