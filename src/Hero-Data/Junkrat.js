import JunkratPic from '../Assets/Images/heroes/Junkrat/Junkrat.png';
import JunkratIcon from '../Assets/Images/heroes/Junkrat/Junkrat-Icon.png';
const Junkrat = {
    isUnique:true,
    heroName:'Junkrat',
    icon: JunkratIcon,
    picture:JunkratPic,
    health:200,
    armor:0,
    passive:{
        damage:50,
        name:'Total Mayhem'
    },
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:false,
                    hasFallOffDamage:false,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    directHitDamage:130,
                    minSplashDamage:10,
                    maxSplashDamage:80,
                    name:'Frag Launcher'
                },
    secondaryFire:{
                    doesDamage:false,
                    canHeadshot:false,
                    name:'N/A'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:true,
                    canHeadshot:false,
                    // Can be do a max of 120 or 30 depending on how far target is from explosion, 3 meter radius
                    maxDamage:120,
                    minDamage:30,
                    // Damage done once target is hit and get burn DoT
                    name:'Concussion Mine'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:true,
                    canHeadshot:false,
                    damage:80,
                    name:'Steel Trap'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    canHeadshot:false,
                    minDamage:60,
                    maxDamage:600,
                    name:'RIP-Tire'
                },
    melee:30,               
}
export default Junkrat;