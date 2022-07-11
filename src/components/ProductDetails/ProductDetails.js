import React from 'react';
import './ProductDetails.css';
import { IoLocationOutline,IoCashOutline,IoShieldOutline,IoChevronForwardOutline} from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import {FaHandshakeAltSlash } from "react-icons/fa";
const ProductDetails = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div>
            <div className='breadcrumb_list'>Bags and Travel<IoChevronForwardOutline/>
            Men Bags<IoChevronForwardOutline/>Backpacks<IoChevronForwardOutline/>
            Fashion backpacks<IoChevronForwardOutline/>Mini Backpack Daypack Bookbags 10L</div>
            <div className='row details'>
                <div className='col-md-3'><img style={{width:'16rem',height:'22rem'}} src="https://static-01.daraz.com.bd/p/a39cccb61adddf40869f750c6e37f462.jpg"/></div>
                <div className='col-md-5'>
                    <h3 className='producttitle'>New Casual White Glasses Anti blue rays Computer Glasses Men Women Blue Light Coating Gaming Glasses</h3>
                    <div style={{display:'flex'}}>
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
                       <p style={{ marginTop:'0.7rem',marginLeft:'1rem',fontSize: "12px",color: "#1a9cb7"}}>177 Ratings | 137 Answered Questions</p> 
                    </div>
                    <p><span style={{color: "#9e9e9e",fontSize: "12px"}}>Brand : </span><span style={{fontSize: "12px",color:"#1a9cb7"}}>No Brand | More Audio from No Brand</span></p>
                    
                    
                    <div>
                        <span style={{fontSize:"30px",color: "#f57224"}}>৳ 350</span><br></br>
                        <span style={{textDecoration: "line-through",color: "#9e9e9e"}}>৳ 259 </span><span> -60%</span>
                    </div>

                    <p>Color Family Black</p>

                    <div className='productdetail-button'>
                        <button className='buynow'>Buy Now</button>
                        <button className='addtocart'>Add To Cart</button>
                    </div>
                </div>



                <div className='col-md-4'>
                <p className='delivery-header__title'>Delivery</p>

                <div className='location__body'>
                <p className='location__addres'><IoLocationOutline/>Dhaka, Dhaka North,<br></br> Banani Road No. 12 - 19</p>
                </div>

                <div style={{marginBottom:'0.8rem'}}>
                    <div style={{display:'flex'}}>
                    <FaHandshakeAltSlash/>
                    <p style={{lineHeight: "14px",marginLeft:'0.8rem'}}>Standard Delivery</p>
                    </div>
                    <p className='delivery-option-item__time'>4 - 9 day(s)</p>
                    <div className='delivery-option-item__promotion'>Enjoy free shipping promotion with minimum spend of ৳ 1,499 from Ayan's Corner.</div>
                </div>

                <div style={{display:'flex'}}>
                <IoCashOutline/>
                <p style={{marginLeft:'1rem',lineHeight: "14px"}}>Cash on Delivery Available</p>
                </div>

                <div style={{marginTop:'1rem'}}>
                <p className='delivery-header__title'>Service</p>

                <div style={{padding:'10px 16px'}}><p style={{lineHeight: "14px"}}>7 Days Returns</p>
                <p className='delivery-option-item__subtitle'>Change of mind is not applicable</p></div>
                </div>

                <div style={{display:'flex'}}>
                    <IoShieldOutline/>
                    <p style={{marginLeft:'1rem',lineHeight: "14px"}}>Warranty not available</p>
                </div>

                <div className='seller_body'>
                    <span className='seller-name__title'>Sold by</span><br></br>
                    <span style={{fontSize: "16px",color: "#212121"}}>Beautiful Shop</span>
                    <div className='pdp-seller-info-pc'>
                    <div className='info-content'>
                        <div className='seller-info-title'>Positive Seller Ratings</div>
                        <div className='seller-info-value'>90%</div>
                    </div>
                    <div className='info-content'>
                        <div className='seller-info-title'>Ship on Time</div>
                        <div className='seller-info-value'>95%</div>
                    </div>
                    <div className='info-content'>
                        <div className='seller-info-title'>Chat Response Rate</div>
                        <div className='seller-info-value'>97%</div>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;