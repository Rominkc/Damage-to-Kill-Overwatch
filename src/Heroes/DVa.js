import DVaPic from '../Assets/Images/heroes/DVa/DVa.png';
import DVaIcon from '../Assets/Images/heroes/DVa/DVa-Icon.png';
const DVa = {
    isUnique:true,
    heroName:'D.Va',
    icon: DVaIcon,
    picture:DVaPic,
    //Has 400hp in mech and 200 armor in mech, 150hp with no mech so added mech and unmech hp since you have to go through armor to do damage to hp anyway
    health:550,
    armor:200,

    primaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:true,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    // does 2 dmg per shot with 11 pellets in each shot
                    minDamage:.6,
                    maxDamage:2,
                    name:'Fusion Cannons'
                },
    secondaryFire:{
                    doesDamage:false,
                    canHeadshot:false,
                    // Counting this ability as secondary fire since it is the right mouse button ability
                    name:'Defense Matrix'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:true,
                    canHeadshot:false,
                    damage:10,
                    name:'Boosters'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:true,
                    canHeadshot:false,
                    // Shoots 11 missiles per second and has a total of 18 rockets pet ability, max 126 damage i.e 7*18
                    directHitDamage:7,
                    minSplashDamage:2,
                    maxSplashDamage:4, 
                    selfDamage:4,
                    name:'Micro Missiles'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    canHeadshot:false,
                    // Does more or less damage depending on how far the target is from the explosion, has 20 meter radius
                    minDamage:100,
                    maxDamage:1000,
                    name:'Self-Destruct'
                },
    melee:30,               
}
export default DVa;