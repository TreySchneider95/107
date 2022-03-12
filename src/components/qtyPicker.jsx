import { useState } from 'react'
import './qtyPicker.css'

const QtyPicker = (props)=>{
    let [qty, setQty] = useState(1);

    const handleDec = ()=>{
        if(qty > 1)
            setQty(qty -= 1)
            props.onChange(qty)
    }

    const handleInc = ()=>{
        setQty(qty += 1)
        props.onChange(qty)
    }

    return(
        <div className='flexBox'>
        <div className='qtyPicker'>
            <button className='btn btn-secondary btn-sm px-2 my-3' onClick={handleDec}>-</button>
            <label>{qty}</label>
            <button className='btn btn-secondary btn-sm px-2 my-3' onClick={handleInc}>+</button>
        </div>
        </div>
    )
}

export default QtyPicker