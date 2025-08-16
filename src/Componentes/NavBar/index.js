import './NavBar.css'

const navbar = () => {

    return(
        <nav className="nav">
            <a href="/" className="main-title">Início</a>
            <ul className="list01">
                <li><a href="/Home">Home</a></li>
                <li><a href="/List">List</a></li>
            </ul>
        </nav>
    );
};

export default navbar