import React from 'react';
import Logo from './../../assets/logo.png';
import './header.css'

const Header = () => {
    return (  
        <nav> 
            <div> 
                <img className="logo" src={Logo}/>     
            </div>

           <div className="Menu">
             <ul >
                <li> Home</li>
                <li> Men</li>
                <li> Women</li>
                <li> All Products</li>
                <li> Oferts</li>
             </ul>
            </div>
        </nav>
    
    )
}

export default Header;