import React from 'react';
import heroArray from './heroArray';
// CSS for component located in Hero-Pages.css
const KillHeroList = props => (
  <div className='hero-list-wrapper'>
    <ul className='hero-list'>
      {heroArray.map(hero => (
        <li key={hero.heroName}>
          <img
            src={hero.icon}
            alt={hero.heroName}
            onClick={() => {
              props.setKillHero(hero);
              props.setHealth(hero.health);
              props.setArmor(hero.armor);
              props.setAbilitySummary('');
            }}
          />
        </li>
      ))}
    </ul>
  </div>
);
export default KillHeroList;
