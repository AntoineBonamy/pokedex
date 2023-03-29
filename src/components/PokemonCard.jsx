const PokemonCard = (props) => {
    return <figure>
        {props.imgSrc === undefined ? <p>???</p> : <img src={props.imgSrc} alt={props.name} /> }
        
        <figcaption>{props.name}</figcaption>
    </figure>
}

export default PokemonCard