import './navBar.css'
import {Link} from 'react-router-dom'


const NavBar = ()=>{
    return(
        // <nav className='navbar navbar-dark bg-dark px-4'>
        //     <h2>Socks-For-U</h2>
        //     </nav>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/#">Socks4U</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/catalog">Catalog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">Cart</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin">Admin</Link>
      </li>
    </ul>
    </div>
</nav>
    )
}

export default NavBar