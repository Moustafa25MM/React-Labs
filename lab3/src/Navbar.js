import { Link } from 'react-router-dom';
import './App.css'


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/posts" className="navbar-link">Posts</Link>
        </li>
        <li className="navbar-item" id="post-link">
          <Link to="/post/1" className="navbar-link">Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;