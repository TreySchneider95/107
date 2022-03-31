import store from "./storeContext"
import { useState } from "react"

const GlobalState = (props)=> {
    const [cart, setCart] = useState([])
    const [loggedInUser, setLoggedInUser] = useState({})
    const addProdToCart = (prod)=>{
        console.log('adding prod to state')
        let copy = [...cart]
        let found = false
        for(let i=0; i<copy.length; i++){
            let prodInCart = copy[i]
            if(prodInCart._id === prod._id){
                prodInCart.qty += prod.qty
                prodInCart.total += prod.total
                found = true
            }
        }
        if(!found){
            copy.push(prod)
        }
        setCart(copy)
    }
    const removeProdToCart = ()=>{
        console.log('removing prod to state')
    }
    return (
        <store.Provider value={{
            cart: cart,
            user: loggedInUser,
            addProdToCart: addProdToCart,
            removeProdToCart: removeProdToCart,
        }}>
            {props.children}
        </store.Provider>
    )
}

export default GlobalState