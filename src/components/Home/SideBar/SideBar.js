import React from 'react';
import './SideBar.css'
import {  IoChevronForwardOutline} from "react-icons/io5";
const SideBar = () => {
    return (
        <div style={{backgroundColor:"white",height:'100%',paddingTop:'1rem'}}>
        <nav id="mainnav" class="mainnav">
                                <ul class="menu"> 
                                    <li class="home">
                                        <a href="index.html">Home <IoChevronForwardOutline/></a>
                                        <ul class="submenu">
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index-v2.html">Home 02</a></li>
                                            <li><a href="index-v3.html">Home 03</a></li>
                                            <li><a href="index-v4.html">Home 04</a></li>
                                            <li><a href="index-v5.html">Home 05</a></li>
                                            <li><a href="index-v6.html">Home 06</a></li>
                                            <li><a href="index-v7.html">Home 07</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="overview.html">About Us <IoChevronForwardOutline/></a></li> 
                                    <li><a href="services.html">Services <IoChevronForwardOutline/></a>
                                        <ul class="submenu">
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="services-single.html">Services Single</a></li>
                                        </ul>
                                    </li>                               
                                    <li><a href="case-v1.html">Cases <IoChevronForwardOutline/></a>
                                        <ul class="submenu">
                                            <li><a href="case-v1.html">Case V1</a></li>
                                            <li><a href="case-v2.html">Case V2</a></li>
                                            <li><a href="case-single-v1.html">Case Single V1</a></li>
                                            <li><a href="case-single-v2.html">Case Single V2</a></li>
                                        </ul>
                                    </li>  
                                    <li><a href="blog.html">News <IoChevronForwardOutline/></a>
                                        <ul class="submenu"> 
                                            <li><a href="blog.html">Blog V1</a></li>
                                            <li><a href="blog-v2.html">Blog V2</a></li>
                                            <li><a href="blog-single.html">Blog single</a></li>
                                        </ul>
                                    </li>                                              
                                    <li><a href="partner.html">Pages <IoChevronForwardOutline/></a>
                                        <ul class="submenu"> 
                                                <li><a href="history.html">History</a></li>
                                                <li><a href="partner.html">Partner</a></li>
                                                <li><a href="team-v1.html">Team V1</a></li>
                                                <li><a href="team-v2.html">Team V2</a></li>
                                                <li><a href="overview.html">Overview</a></li>
                                                <li><a href="header.html">Header</a></li>
                                            </ul>
                                        </li>
                                
                                </ul>
                            </nav>    
        </div>
    );
};

export default SideBar;