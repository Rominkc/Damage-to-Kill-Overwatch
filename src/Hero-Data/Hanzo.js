import HanzoPic from '../Assets/Images/heroes/Hanzo/Hanzo.png';
import HanzoIcon from '../Assets/Images/heroes/Hanzo/Hanzo-Icon.png';
const Hanzo = {
    isUnique:true,
    heroName:'Hanzo',
    icon: HanzoIcon,
    picture:HanzoPic,
    health:200,
    armor:0,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:false,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    // Does damage based on how long you charge the shot
                    minDamage:29.4,
                    maxDamage:125,
                    name:'Storm Bow'
                },
    secondaryFire:{
                    doesDamage:false,
                    canHeadshot:false,
                    name:'N/A'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:false,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    // Does damage based on how long you charge the shot
                    minDamage:29.4,
                    maxDamage:125,
                    name:'Sonic Arrow'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:true,
                    canHeadshot:true,
                    // 70 per arrow, 1 shot every 0.3 seconds (3.33 shots per second), 6 ammo
                    damage:70,
                    name:'Storm Arrows'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    // arrow can head shot, dragon cannot
                    canHeadshot:false,
                    // from arrow that shoots the ult, does fixed damage even if storm arrow is used before ult
                    arrowDamage:125,
                    //  150 damage per second/per dragon, Up to 993.6 damage against a stationary target 
                    dragonDamage:150,
                    name:'Dragonstrike'
                },
    melee:15,               
}
export default Hanzo;