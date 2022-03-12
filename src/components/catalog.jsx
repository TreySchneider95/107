import './catalog.css'
import Product from './product'
import DataService from '../services/dataService'
import { useState, useEffect } from 'react';


const Catalog = ()=>{
    let [products, setProduct] = useState([])
    const loadCatalog = ()=>{
        let service = new DataService()
        let data = service.getCatalog()
        setProduct(data)
    }
    useEffect(()=>{
        loadCatalog()
    })
    return(
        <div className='catalog'>
            {/* <h2>We have {products.length} Products!</h2> */}
            {products.map((prod) => (<Product key={prod._id} data={prod}/>))}
        </div>
    )
}

export default Catalog