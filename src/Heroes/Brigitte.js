import BrigittePic from '../Assets/Images/heroes/Brigitte/Brigitte.png';
import BrigitteIcon from '../Assets/Images/heroes/Brigitte/Brigitte-Icon.png';
const Brigitte = {
    isUnique:false,
    heroName:'Brigitte',
    icon: BrigitteIcon,
    picture:BrigittePic,
    health:200,
    armor:50,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:false,
                    hasFallOffDamage:false,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    damage:35,
                    name:'Rocket Flail'
                },
    secondaryFire:{
                    doesDamage:true,
                    canHeadshot:false,
                    // when brigitte has her shield active she can stun a target, I'm counting this ability as secondary fire
                    damage:5,
                    name:'Shield Bash'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:false,
                    canHeadshot:false,
                    //Changes Bastion into turret form
                    healing:150,
                    name:'Repair Pack'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:true,
                    canHeadshot:false,
                    //Does an attack in linear direction and knocks back
                    damage:70,
                    name:'Whip Shot'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:false,
                    canHeadshot:false,
                    //	15 armor per 0.5 seconds, up to 100 armor on self and allies
                    healing:15,
                    name:'Rally'
                },
    melee:35,               
}
export default Brigitte;