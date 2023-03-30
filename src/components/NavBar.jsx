const NavBar = ({previous, next}) => {
    
    return <nav>
        <button onClick={previous}>Précédent</button>
        <button onClick={next}>Suivant</button>
    </nav>
}

export default NavBar