const NavBar = ({previous, next, index, buttonName, setIndex}) => {
    
    const handleButton = (poke) => {
        {setIndex(buttonName.indexOf(poke))}
    }

    return <nav>
        {index <= 0 ? undefined : <button onClick={previous}>Précédent</button>}
        {index >= 4 ? undefined : <button onClick={next}>Suivant</button>}
        <br/>
        <br/>
        {buttonName.map((poke, i) => (
            <button key={i} onClick={() => handleButton(poke)}>{poke.name}</button>
        ))}
    </nav>
}

export default NavBar