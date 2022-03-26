import './product.css'
import QtyPicker from './qtyPicker';
import { useState } from 'react';

const Product = (props)=>{
    let [total, setTotal] = useState(props.data.price)

    const qtyChange = (qty)=>{
        setTotal(total = Math.round((props.data.price * qty + Number.EPSILON) * 100) / 100)
    }

    return(
        <div className='shadow product'>
            <img src={props.data.image} alt="" />
            <h4>{props.data.title}</h4>
            <label>${props.data.price}</label><br />
            <label>Total: ${total}</label>
            <QtyPicker onChange={qtyChange}></QtyPicker>
            <button className='btn btn-secondary btn-sm'>Add</button>
        </div>
    )
}

export default Product