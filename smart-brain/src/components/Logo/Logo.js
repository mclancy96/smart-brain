import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.gif';

const Logo = () => {
    return(
        <div className="fl ma4 mt0 center">
            <Tilt>
                <div className="Tilt shadow-2 db" style={{ width:"200px"}}>
                    <img style={{paddingTop: '3px', paddingLeft:'5px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
            <br></br>
        </div>
        
    )
}

export default Logo;


   