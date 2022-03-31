import './product.css'
import QtyPicker from './qtyPicker';
import { useState } from 'react';
import store from '../context/storeContext';
import { useContext } from 'react';

const Product = (props)=>{
    let [quantity , setQuantity] = useState(1)
    let [total, setTotal] = useState(props.data.price)
    let addProdToCart = useContext(store).addProdToCart
    let removeProdFromCart = useContext(store).removeProdFromCart

    const qtyChange = (qty)=>{
        setQuantity(qty)
        setTotal(total = Math.round((props.data.price * qty + Number.EPSILON) * 100) / 100)
    }
    const addProduct = ()=>{
        let cartProd = {...props.data}
        cartProd.total = total
        cartProd.qty = quantity
        console.log(cartProd)
        addProdToCart(cartProd)

    }
    const removeProduct = ()=>{
        removeProdFromCart()
    }
    return(
        <div className='shadow product'>
            <img src={props.data.image} alt="" />
            <h4>{props.data.title}</h4>
            <label>${props.data.price}</label><br />
            <label>Total: ${total}</label>
            <QtyPicker onChange={qtyChange}></QtyPicker>
            <button onClick={addProduct} className='btn btn-secondary btn-sm'>Add</button>
        </div>
    )
}

export default Product