import React, { useState } from 'react';
import './Product.css';
// import { Rating } from 'react-simple-star-rating'

const Product = () => {
    const [rating, setRating] = useState(0) // initial rating value
    // const handleRating = (rate: number) => {
    //     setRating(rate)
    //     // other logic
    //   }
    return (
        <div>
        <div className='header'>Just for you</div>

        <div className='card-fs-content'>
            <div className='box'>
            <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/61fecdd6ebcab6ecd7b30e641085f32d.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.5rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>realme gt neo 2-(8gb ram/128gb rom) </p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 103</p>
            </div>
        </div>

        <div className='box'>
            <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/ecc64d35ffd253ea14ffaf49e6e0497a.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.5rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}> Samsung 43AU7700 43 inch Crystal 4K UHD Smart TV </p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 103</p>
            </div>
        </div>

        <div className='box'>
            <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/mdc/f2a9b7a0a482664db2a51a7532bc2ea8.jpg"></img>
            <div style={{margin:'0.5rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>3.5mm Jack Microphone Tie Clip-on Lapel Mikrofon</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 103</p>
            </div>
        </div>

        <div className='box'>
            <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/8c5bccd1908fe809e7194743ad973679.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.5rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>Vintage T9 Hair Cutting Machine Hair Trimmer</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 670</p>
            </div>
        </div>

        <div className='box'>
            <img  style={{width:"190px",height:"188px"}} src="https://static-01.daraz.com.bd/p/mdc/7c0a3ffc4f450dca414d61cab9c826a1.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.3rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>The 4-Hour Work Week</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 659</p>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Product;