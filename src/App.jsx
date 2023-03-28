import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from "./components/PokemonCard"
import Mytitle from "./components/MyTitle"

function App() {
  return (
    <div>
      <Mytitle/>
      <PokemonCard/>
    </div>
  );
}

export default App;