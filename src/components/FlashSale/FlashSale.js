import React from 'react';
import './FlashSale.css'
import { NavLink } from 'react-router-dom';
const FlashSale = () => {
    return (
        <div>
            <div className='header'>FlashSale</div>

            <div className='card-fs-content'>

            <NavLink to="/product/detail" style={{textDecoration:'none'}} className='box'>
                <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/a39cccb61adddf40869f750c6e37f462.jpg"></img>
                <div style={{margin:'0.5rem'}}>
                <p style={{fontSize: "14px",lineHeight:"18px",color:'black'}}>3.5mm Jack Microphone Tie Clip-on Lapel Mikrofon</p>
                <p style={{color:'#f85606',fontSize: "18px"}}>৳ 103</p>
                </div>
            </NavLink>

            <NavLink to="/product/detail" style={{textDecoration:'none'}} className='box'>
                <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/e96432ae98955c2f5c2ad3a6033aa15f.jpg_200x200q75-product.jpg_.webp"></img>
                <div style={{margin:'0.5rem'}}>
                <p style={{fontSize: "14px",lineHeight:"18px",color:'black'}}>Unisex Binary LED Digital Date Square Dial Casual Sport Plastic </p>
                <p style={{color:'#f85606',fontSize: "18px"}}>৳ 514</p>
                </div>
            </NavLink>

            <NavLink to="/product/detail" style={{textDecoration:'none'}} className='box'>
                <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/mdc/f2a9b7a0a482664db2a51a7532bc2ea8.jpg"></img>
                <div style={{margin:'0.5rem'}}>
                <p style={{fontSize: "14px",lineHeight:"18px",color:'black'}} >3.5mm Jack Microphone Tie Clip-on Lapel Mikrofon</p>
                <p style={{color:'#f85606',fontSize: "18px"}}>৳ 103</p>
                </div>
            </NavLink>

            <NavLink to="/product/detail" style={{textDecoration:'none'}} className='box'>
                <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/5793749aae09fe3e830bd2d7ccc0527b.jpg_200x200q75-product.jpg_.webp"></img>
                <div style={{margin:'0.5rem'}}>
                <p style={{fontSize: "14px",lineHeight:"18px",color:'black'}}>NEW STYLE Cotton Formal Shirt for Men </p>
                <p style={{color:'#f85606',fontSize: "18px"}}>৳ 103</p>
                </div>
            </NavLink>

            <NavLink to="/product/detail" style={{textDecoration:'none'}} className='box'>
                <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/494d7988f38ebead3b4140edc75703f8.jpg_200x200q75-product.jpg_.webp"></img>
                <div style={{margin:'0.5rem'}}>
                <p style={{fontSize: "14px",lineHeight:"18px",color:'black'}}>New Blue Cotton Polo T- Shirt </p>
                <p style={{color:'#f85606',fontSize: "18px"}}>৳ 1100</p>
                </div>
            </NavLink>



            </div>
        </div>
    );
};

export default FlashSale;