const NavBar = ({previous, next, index, buttonName}) => {
    
    const handleButton = () => {

    }

    return <nav>
        {index <= 0 ? undefined : <button onClick={previous}>Précédent</button>}
        {index >= 4 ? undefined : <button onClick={next}>Suivant</button>}
        <br/>
        <br/>
        {buttonName.map((poke, index) => (
            <button key={index} onClick={handleButton}>{poke.name}</button>
        ))}
    </nav>
}

export default NavBar