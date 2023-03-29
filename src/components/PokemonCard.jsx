import PropTypes from "prop-types";


const PokemonCard = ({pokemonArg}) => {

    return <figure>
        {pokemonArg.imgSrc === undefined ? <p>????</p> : <img src={pokemonArg.imgSrc} alt={pokemonArg.name} /> }
        
        <figcaption>{pokemonArg.number} {pokemonArg.name}</figcaption>
    </figure>
}

PokemonCard.propTypes = {
    pokemonArg: PropTypes.shape({
        name: PropTypes.string.isRequired
    }
    )
}

export default PokemonCard