import "./home.css"
import {Link} from 'react-router-dom'


const Home = ()=>{
    return(
        <div className="home-page">
            <h1>Socks4U</h1>
            <p>We Sell Socks for you!</p>
            <Link to='/catalog' className="btn btn-info">Check our amazing catalog!</Link>
        </div>
    )
}

export default Home