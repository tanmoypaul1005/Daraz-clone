import React from 'react';
import './Cart.css'
import { Form, FormControl } from 'react-bootstrap';
import { IoAddOutline,IoBagRemove } from "react-icons/io5";
const Cart = () => {
    return (
        <div>
            <div className='row'>
            <div className='col-md-8'>

                <div className='delivery-option-body'>
                    <span className='delivery-slider-title'>Preferred Delivery Option</span>
                    <div style={{border:'1px solid black',width:'15rem',marginTop:'1rem'}}>
                        <p className='delivery-item-name'>Please Select item</p>
                        <p className='delivery-item-time'>Availability and promotions will be shown here</p>
                    </div>
                </div>

                <div className='list-header-main' style={{display :'flex',margin:'3rem'}}>
                <Form.Check aria-label="option 1" />
                <span style={{marginLeft:'1rem',textSize:'0.8rem'}}>SELECT ALL 3 ITEM</span>
                <span style={{marginLeft:'33rem',display:'flex'}}><IoBagRemove/>delete</span>
                </div>

                <div style={{margin:'3rem'}} className=' cart-header-main row'>
                <div className='col-md-7' >
                    <div style={{display:'flex'}}>
                    <Form.Check aria-label="option 1" />
                    <p style={{marginLeft:'1rem',textSize:'12px'}}>ETOP</p><br></br>
                    </div>
                <p style={{marginLeft:'1rem',textSize:'1px',color: "rgb(0, 0, 0)",fontWeight:'normal'}}>Buy 3 item(s) enjoy free shipping for Standard delivery </p>
               
                <div style={{display:'flex'}}>
                <img style={{width:'80px',height:'80px',marginLeft:'1rem'}} src="https://static-01.daraz.com.bd/p/0c2c24fa5285d3e0fc3c558010dee866.jpg"/>
                <div style={{marginLeft:'1rem'}}>
                <span className='cart-content-title'>Fashion Men High Top Shoes Black White Sneakers New Man Sport Shoes Soft Lightweight Kasut lelaki</span>
                <span className='cart-item-left'>No Brand, Color Family:Balck+white, Size:EU:42</span>
                </div>
                </div>
               </div>

                <div style={{marginTop:'2.7rem'}} className='col-md-5'>
                    <div className='row'>
                    <div className='col-md-6'>
                    <span className='current-price'>৳ 1,694</span><br></br>
                    <span className='cart-origin-price'>৳ 4,209</span><br></br>
                    <span>-60%</span>
                    </div>
                    
                    <div 
                    style={{lineHeight: '24px',userSelect: 'none',
                    cursor: 'pointer',
                    display: 'block',
                    transition: 'line-height .2s',
                    textSize:'200px'
                    }} className='col-md-6'>
                        <span >-</span> 3 <IoAddOutline/>
                    </div>
                    </div>
                </div>
               
                </div>

            </div>


            <div  style={{marginTop:'2rem'}}className='col-md-4'>
                <div className='summary-section'>
                    <span className='summary-section-heading'>Order Summary</span><br></br>
                    <span className='checkout-summary-label'>Subtotal (0 items)</span><br></br>
                    <div style={{display:'flex',marginBottom:'1rem'}}><FormControl placeholder='Enter Voucher Code' className='next-input-medium'/><button className='cart-button'>Apply Now</button></div>
                    <span style={{marginBottom:'1rem'}}>Total</span><br></br>
                    <button className='checkout-order-total-button'>Process To Checkout</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cart;