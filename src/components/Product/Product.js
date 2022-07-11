import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';
import ReactStars from "react-rating-stars-component";

const Product = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div>
        <div className='header'>Just for you</div>

        <div className='card-product-content'>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/61fecdd6ebcab6ecd7b30e641085f32d.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>realme gt neo 2-(8gb ram/128gb rom) </p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 103</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}}className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/ecc64d35ffd253ea14ffaf49e6e0497a.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}> Samsung 43AU7700 43 inch Tv </p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 103</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/mdc/f2a9b7a0a482664db2a51a7532bc2ea8.jpg"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>3.5mm Jack Microphone Tie Clip-on Lapel Mikrofon</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 103</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/8c5bccd1908fe809e7194743ad973679.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>Vintage T9 Hair Cutting Machine Hair Trimmer</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 670</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/mdc/7c0a3ffc4f450dca414d61cab9c826a1.jpg_200x200q75-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>The 4-Hour Work Week</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 659</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/32832ae8602913578b3b602382a92d22.jpg_200x200q80-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}> New High Quality Drill Machin Set</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 2375</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/c98545227267796d48b3642d8d01065f.jpg_200x200q80-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>OLEVS Men Women Fashion Round Dial</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 730</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/8fb8be3fe799c639fd7632cd357a7040.jpg_200x200q80-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>Tuker D20 Pro Smart Watch Bluetooth Fitness Sport</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 699</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/bcc11fd1993aa3239cfdeadd92a7f1a0.jpg_200x200q80-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>Abstract Digital Printed Casual Tops Men New</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 800</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>

        <NavLink to="/product/detail" style={{textDecoration:'none'}} className='productbox'>
            <img  style={{width:"210px",height:"188px"}} src="https://static-01.daraz.com.bd/p/cce6687f98ebd1423c55ecdb010b5d2e.jpg_200x200q80-product.jpg_.webp"></img>
            <div style={{margin:'0.9rem'}}>
            <p style={{fontSize: "14px",lineHeight:"18px",color: "#212121"}}>Argentina Pre Match Jersey Thai Imported Football Kit</p>
            <p style={{color:'#f85606',fontSize: "18px",lineHeight: "22px"}}>৳ 400</p>
            <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
            <ReactStars
                        style={{lineHeight: "14px"}}
                         count={5}
                         onChange={ratingChanged}
                         size={24}
                         isHalf={true}
                         emptyIcon={<i className="far fa-star"></i>}
                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                         fullIcon={<i className="fa fa-star"></i>}
                         activeColor="#ffd700"
            />
            </div>
        </NavLink>
        </div>
    </div>
    );
};

export default Product;