import React from 'react';

const HeroPageKillHero=({killHero,health,armor})=>(
    <div className='hero-page-kill-hero'>
        <h1 className='header-dmg2kOW'>{killHero.heroName}</h1>
        <img src={killHero.picture} className='chosen-hero-img' alt={killHero.heroName}/>
        { health > 0 || killHero.heroName === '???' ? 
            <p className='header-dmg2kOW'> Health: {health}/{killHero.health}</p> 
            : <p className="header-dmg2kOW"> *Hero Killed* </p>
        }

        {armor > 0 ?
            <p className='header-dmg2kOW'> Armor: {armor}/{killHero.armor}</p> 
            : <p className='header-dmg2kOW fade-out' > Armor: {armor}/{killHero.armor}</p>
        }
        <p className='header-dmg2kOW'>Choose hero to kill: </p>
    </div>
)

export default HeroPageKillHero;

