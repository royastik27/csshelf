import { Link } from 'react-router-dom';

import './../css/Navbar.css';

function Navbar() {
    return (
        <nav id="main-nav">
            <Link to="/">📚 HOME</Link>
            <Link to="/notes">📄 NOTES</Link>
            <Link to="/create">✍ CREATE</Link>
            <Link to="/login">👤 LOGIN</Link>
            <Link to="/signup">📁 SIGNUP</Link>
        </nav>
    );
  }

export default Navbar;