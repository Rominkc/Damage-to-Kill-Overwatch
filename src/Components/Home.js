import React, {useState} from 'react';

import MysteryHero from '../Assets/Images/heroes/Mystery Hero/Mystery Hero.png'
import HeroListItems from './HeroListItems';
 /*import {Link} from 'react-router-dom'; */
import './Home.css';

const Home = () =>{
    const [pict,setPict] = useState(MysteryHero)
    const [name,setName] = useState('???')

    return(
    <div className="header-dmg2kOW" >
        <p>Determine how much damage it takes a hero to kill another hero</p>
        <p> Choose your hero: </p>
        <p>{name}</p>
        <img src={pict} alt={name} className='chosen-hero-img'/>
        <div className="hero-list-wrapper">
            <ul className='hero-list'>
            <HeroListItems setPict={setPict} setName={setName} />
            </ul>
        </div>
    </div>)
};

export default Home;