import React from 'react';

import Footer from './footer';
import Header from './header';
import Banner from'./../../assets/banner.jpg';
import './body.css';
import Camisa1 from './../../assets/camisa1.jpg'
import Camisa2 from './../../assets/camisa2.webp'
import Camisa3 from './../../assets/camisa3.jpg'

const Body =(props)=>{
    return(
        <section>
            <Header/>
              <div> 
                  
               <img className="banner" src={Banner}/>

               <h3 className="T1">Lo màs vendido</h3>

              <img className="c1"src={Camisa1}/>

              <img className="c2"src={Camisa2}/>

              <img className="c3" src={Camisa3}/>
              </div>
            {props.children}
            <Footer/>
        </section>
       
    )
}

export default Body;