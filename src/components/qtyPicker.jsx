import { useState } from 'react'
import './qtyPicker.css'

const QtyPicker = ()=>{
    let [qty, setQty] = useState(1);

    const handleDec = ()=>{
        if(qty > 1)
            setQty(qty - 1)
    }

    const handleInc = ()=>{
        setQty(qty + 1)
    }

    return(
        <div className='flexBox'>
        <div className='qtyPicker'>
            <button onClick={handleDec}>-</button>
            <p>{qty}</p>
            <button onClick={handleInc}>+</button>
        </div>
        </div>
    )
}

export default QtyPicker