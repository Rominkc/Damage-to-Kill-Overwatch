import React from 'react';
import background from '../Assets/Images/damage-to-kill-ow-background.jpg'
import './CustomBackground.css'
const CustomBackground = () =>(
    <>
    <div className='background-img-overlay'/>
    <img className='background-img' src={background} alt="Damage to Kill Overwatch Background" ></img>
    </>
);

export default CustomBackground;