import { Link } from 'react-router-dom';

import './../css/Navbar.css';

function Navbar() {
    return (
        <nav id="main-nav">
            <Link to="/">📚 HOME</Link>
            <Link to="/create">✍ CREATE</Link>
            <Link to="/view">🧐 VIEW</Link>
        </nav>
    );
  }

export default Navbar;