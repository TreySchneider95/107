import './cartProd.css'


const CartProd = (props)=>{


    return (
        
        <div className="cartProd d-flex justify-content-around shadow-lg">
            <img src={props.data.image}/>
            <div className="d-flex align-items-center flex-column p-1">
                <div>
                    <h4>{props.data.title}</h4>
                </div>
                <div>
                    <p className='m-3'>{props.data.category}</p>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className='d-flex align-items-end flex-column p-1'>
                    <p>Price Per: </p>
                    <p>qty: </p>
                    <p> Total: </p>
                </div>
                <div className='d-flex align-items-end flex-column p-1'>
                    <p>${props.data.price}</p>
                    <p>{props.data.qty}</p>
                    <p>${props.data.total}</p>
                </div>
            </div>
        </div>
    )
}

export default CartProd