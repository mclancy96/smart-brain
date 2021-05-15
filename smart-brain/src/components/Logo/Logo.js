import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain-solid.svg';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt>
                <div className="Tilt br2 shadow-2" style={{maxWidth:"55px"}}>
                    <img style={{paddingTop: '5px'}} alt='log' src={brain}/>
                </div>
            </Tilt>
        </div>
        
    )
}

export default Logo;


   