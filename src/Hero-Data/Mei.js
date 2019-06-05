import MeiPic from '../Assets/Images/heroes/Mei/Mei.png';
import MeiIcon from '../Assets/Images/heroes/Mei/Mei-Icon.png';

const Mei = {
    isUnique:true,
    heroName:'Mei',
    icon: MeiIcon,
    picture:MeiPic,
    health:250,
    armor:0,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:false,
                    hasFallOffDamage:false,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    //Does 55 damage per second, 2.75 per tick, shoots 20 ticks per second, and takes 30 ticks to freeze, freeze = 1.5 seconds, frozen = 1.5 seconds
                    damage:55,
                    pPerSecond:20,
                    name:'Endothermic Blaster'
                },
    secondaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    // 1 shot per 0.8 seconds
                    damage:75,
                    name:'Endothermic Blaster (Icicle)'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:false,
                    canHeadshot:false,
                    // Does 37.5 per second, 150 total
                    healing:150,
                    name:'Cryo-Freeze'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:false,
                    canHeadshot:false,
                    //creates wall that has 400 health per pillar, 5 pillars
                    name:'Ice Wall'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    canHeadshot:false,
                    //Does 100 damage over duration (5 secs), 20 dmg per sec, freezes all targets in affected area
                    //Travels 20 meters per second so estimation of projects per second is 20 aswell, might not be 100% accurate
                    damage:100,
                    pPerSecond:20,
                    name:'Blizzard'
                },
    melee:30,               
}
export default Mei;