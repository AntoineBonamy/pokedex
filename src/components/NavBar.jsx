const NavBar = ({previous, next, index}) => {
    
    return <nav>
        {index <= 0 ? undefined : <button onClick={previous}>Précédent</button>}
        {index >= 4 ? undefined : <button onClick={next}>Suivant</button>}
    </nav>
}

export default NavBar