import SigmaPic from '../Assets/Images/heroes/Sigma/Sigma.png';
import SigmaIcon from '../Assets/Images/heroes/Sigma/Sigma-Icon.png';
const Sigma = {
  isUnique: true,
  heroName: 'Sigma',
  icon: SigmaIcon,
  picture: SigmaPic,
  health: 400, //300 Base Health 100 Shields
  armor: 0,
  primaryFire: {
    doesDamage: true,
    canHeadshot: false,
    hasFallOffDamage: false,
    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
    directHitDamage: 120, //Sigma launches two gravitic charges, which bounce off walls and implode after a short duration, damaging enemies within a sizable radius.
    minSplashDamage: 21, //Does 60 damage each Direct Hit, 10.5 min splash, and 35 max splash Using DPS algorithm since he shoots two shots at once
    maxSplashDamage: 70,
    minSelfDamage: 2.625,
    maxSelfDamage: 8.75,
    pPerShot: 2,
    name: 'Hyperspheres'
  },
  secondaryFire: {
    doesDamage: false,
    canHeadshot: false,
    name: 'N/A'
  },
  // 'Lshift' ability
  abilityOne: {
    doesDamage: false,
    canHeadshot: false,
    //Sigma freezes incoming projectiles in midair, converting them into shields.
    name: 'Kinetic Grasp'
  },
  // 'e' ability
  abilityTwo: {
    doesDamage: true,
    canHeadshot: false,
    directHitDamage: 80,
    minSplashDamage: 15,
    maxSplashDamage: 50,
    minSelfDamage: 7.5,
    maxSelfDamage: 25,
    //Sigma gathers a mass of debris and flings it at an enemy to knock them down.
    name: 'Accretion'
  },
  // 'q'|ultimate ability
  abilityThree: {
    doesDamage: true,
    canHeadshot: false,
    //Sigma directs a continuous salvo of mini-rockets to destroy groups of enemies.
    minDamage: 10,
    maxDamage: 40,
    name: 'Gravitic Flux'
  },
  melee: 30
};
export default Sigma;
