import './cart.css'
import CartProd from './cartProd'
import store from '../context/storeContext'
import { useContext } from 'react'


const Cart = ()=>{
    const {cart, addProdToCart} = useContext(store)
    return(
        <div className='cart'>
            <h3>This is your cart</h3>
            <p>It has {cart.length} socks in it</p>

            <div className="products">
                {cart.map((prod) => (<CartProd key={prod._id} data={prod}/>))}
            </div>
        </div>
    )
}

export default Cart