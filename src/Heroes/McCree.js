import McCreePic from '../Assets/Images/heroes/McCree/McCree.png';
import McCreeIcon from '../Assets/Images/heroes/McCree/McCree-Icon.png';

const McCree = {
    isUnique:true,
    heroName:'McCree',
    icon: McCreeIcon,
    picture:McCreePic,
    health:200,
    armor:0,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:true,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    minDamage:35,
                    maxDamage:70,
                    name:'Peacekeeper'
                },
    secondaryFire:{
                    doesDamage:true,
                    canHeadshot:false,
                    hasFallOffDamage:true,
                    minDamage:25,
                    maxDamage:50,
                    name:'Peacekeeper (Fan the Hammer)'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:false,
                    canHeadshot:false,
                    //Mccree rolls in the direction he's moving and reloads his weapon in the process
                    name:'Combat Roll'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:true,
                    canHeadshot:false,
                    //stuns target for .8 seconds
                    damage:25,
                    name:'Flashbang'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    canHeadshot:false,
                    // Deadeye Damage Description: 0.2 to 1.0 seconds: 100 per second; 80 overall, 1.0 to 1.5 seconds: 275 per second, 1.5 seconds to 6.2 seconds: 550 per second
                    oneSecDamage:100,
                    twoSecDamage:512.5,
                    threeSecDamage:1062.5,
                    name:'Deadeye'
                },
    melee:30,               
}
export default McCree;