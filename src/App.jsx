import './App.css'
import {useState} from 'react';
import { useEffect } from 'react';
import PokemonCard from "./components/PokemonCard"
import NavBar from './components/NavBar';

alert("Welcome, trainers !")

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
      number: "",
    },
  ];
  
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const currentPokemon = pokemonList[pokemonIndex]
  if (currentPokemon.number == "025") {
    setTimeout(() => {
      alert("Pika !")
    }, 100)
    
  }

  return (
    <div>
      <NavBar previous={handleClickDown} next={handleClickUp} index={pokemonIndex} buttonName={pokemonList} setIndex={setPokemonIndex}/>
      <PokemonCard pokemonArg={pokemonList[pokemonIndex]}/> 
    </div>
  );
}

export default App;