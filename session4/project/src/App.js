import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
   <>
      {/* <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contact">contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <nav className="nav bg-primary" data-bs-theme="dark">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
      <Outlet />
   </>
  );
}

export default App;
