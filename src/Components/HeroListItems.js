import React from 'react';
import heroArray from './heroArray';
import MysteryHero from '../Assets/Images/heroes/Mystery Hero/Mystery Hero.png';
import { Link } from 'react-router-dom';
const HeroListItems = props =>
  heroArray.map(hero => (
    <Link to={`/${hero.heroName}`} key={hero.heroName}>
      <li
        onMouseOver={() => {
          props.setPict(hero.picture);
          props.setName(hero.heroName);
        }}
        onMouseOut={() => {
          props.setPict(MysteryHero);
          props.setName('???');
        }}
      >
        <img src={hero.icon} alt={hero.heroName} />
      </li>
    </Link>
  ));
export default HeroListItems;
