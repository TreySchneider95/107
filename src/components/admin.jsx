import './admin.css'
import { useState, useEffect } from 'react';
import DataService from '../services/dataService';


const Admin = ()=>{
    const [prod, setProd] = useState({})
    const [coupon, setCoupon] = useState({})

    const handleInputChange = (e)=>{
        // console.log('text change', e.target.value, e.target.name)

        var copy = {...prod}
        copy[e.target.name] = e.target.value
        setProd(copy)
    }
    const handleInputChangeCoupon = (e)=>{
        // console.log('text change', e.target.value, e.target.name)

        var copy = {...coupon}
        copy[e.target.name] = e.target.value
        setCoupon(copy)
    }
    const submitObject = ()=>{
        console.log(prod)
        let service = new DataService()
        service.saveProduct(prod)
    }
    const submitObjectCoupon = ()=>{
        console.log(coupon)
        let service = new DataService()
        service.saveProduct(coupon)
    }
    return(
        <div className='admin'>
            <h2>Store Administration</h2>
            <p>Socks4U store.</p>
            <h6>By: Trey Schneider</h6>
            <div className='d-flex flex-lg-row flex-md-row flex-sm-column'>
            <section className = "adminForm">
                <h3>Register new product</h3>
                <div className="form-group d-flex">
                    <label className='label'>Title:</label>
                    <input onChange={handleInputChange} placeholder='Title' type="text" name="title" id="title" className='form-control'/>
                </div>
                <div className="form-group d-flex">
                    <label className='label'>Image:</label>
                    <input onChange={handleInputChange} placeholder='Image' type="text" name="image" id="image" className='form-control'/>
                </div>
                <div className="form-group d-flex">
                    <label className='label'>Category:</label>
                    <input onChange={handleInputChange} placeholder='Category' type="text" name="category" id="category" className='form-control' />
                </div>
                <div className="form-group d-flex">
                    <label className='label'>Price:</label>
                    <input onChange={handleInputChange} placeholder='Price' type="number" name="price" id="price" className='form-control' />
                </div>
                <div className="form-group d-flex">
                    <label className='label'>Stock:</label>
                    <input onChange={handleInputChange} placeholder='Stock' type="number" name="stock" id="stock" className='form-control' />
                </div>
                <button onClick={submitObject} className='btn btn-dark'>Save Product</button>
            </section>
            <section className = "adminForm">
                <h3>Register new coupon</h3>
                <div className="form-group d-flex">
                    <label className='label'>Percent:</label>
                    <input onChange={handleInputChangeCoupon} placeholder='Percent' type="number" name="percent" id="percent" className='form-control'/>
                </div>
                <div className="form-group d-flex">
                    <label className='label'>Code:</label>
                    <input onChange={handleInputChangeCoupon} placeholder='Code' type="text" name="code" id="code" className='form-control'/>
                </div>
                <button onClick={submitObjectCoupon} className='btn btn-dark'>Save Product</button>
            </section>
            </div>
        </div>
    )
}

export default Admin