import { Link } from 'react-router-dom';

import './../css/Navbar.css';
import { ConnectingAirportsOutlined } from '@mui/icons-material';

// MAKING LINK ACTIVE
function makeLinkActive(event) {
    
    const DOMLinks = document.getElementsByClassName('nav-link');
    const DOMLinksLen = DOMLinks.length;
    
    for(let i = 0; i < DOMLinksLen; ++i)
        DOMLinks[i].classList.remove('active');

    event.target.classList.add('active');
}

// NAVBAR COMPONENT
function Navbar() {

    return (
        <nav id="main-nav" className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CSSHELF</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={makeLinkActive}>📚 HOME</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/notes" onClick={makeLinkActive}>📄 NOTES</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/create" onClick={makeLinkActive}>✍ CREATE</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={makeLinkActive}>👤 LOGIN</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/signup" onClick={makeLinkActive}>📁 SIGNUP</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ⚙ MY ACCOUNT
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/mycollections">My Collections</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="/logout">Log Out</Link></li>
                        </ul>
                    </li>

                </ul>

                <form id="nav-search-box" className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="🔍 Search notes..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;