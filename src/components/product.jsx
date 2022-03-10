import './product.css'
import QtyPicker from './qtyPicker';
import { useState } from 'react';

const Product = (props)=>{
    let [total, setTotal] = useState(props.price)
    return(
        <div className='shadow product'>
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <label>${props.price}</label><br />
            <label>Total: ${total}</label>
            <QtyPicker></QtyPicker>
            <button className='btn btn-secondary btn-sm'>Add</button>
        </div>
    )
}

export default Product