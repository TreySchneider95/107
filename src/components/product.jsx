import './product.css'
import QtyPicker from './qtyPicker';

const Product = ()=>{
    return(
        <div className='product'>
            <img src="https://picsum.photos/200/300" alt="" />
            <h2>Hoodie</h2>
            <label>Price</label><br />
            <label>Total</label>
            <QtyPicker></QtyPicker>
            <button>Add</button>
        </div>
    )
}

export default Product