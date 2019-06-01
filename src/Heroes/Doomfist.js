import DoomfistPic from '../Assets/Images/heroes/Doomfist/Doomfist.png';
import DoomfistIcon from '../Assets/Images/heroes/Doomfist/Doomfist-Icon.png';
const Doomfist= {
    isUnique:true,
    heroName:'Doomfist',
    icon: DoomfistIcon,
    picture:DoomfistPic,
    health:250,
    armor:0,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:true,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    //1.8 - 6 per pellet, 19.8 - 66 per shot (11 pellets per shot)
                    minDamage:19.8,
                    maxDamage:66,
                    pPerShot:11, // Projectiles Per Shot
                    name:'Hand Cannon'
                },
    secondaryFire:{
                    doesDamage:true,
                    canHeadshot:false,
                    // Does more or less damage depending on how long you charge to punch, does damage 
                    minChargeDamage:49,
                    maxChargeDamage:100,
                    // Does damage based on impact with wall
                    minWallImpactDamage:49,
                    maxWallImpactDamage:150,
                    name:'Rocket Punch'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:true,
                    canHeadshot:false,
                    // Damage depends on how long Doomfist was in the air for
                    minDamage:49,
                    maxDamage:125,
                    // Damage done once target is hit and get burn DoT
                    name:'Seismic Slam'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:true,
                    canHeadshot:false,
                    damage:50,
                    name:'Rising Uppercut'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    canHeadshot:false,
                    hasFallOffDamage:true,
                    // does most damage if target hit inner ring
                    innerRingDamage:300,
                    // does less damage if target hits outer ring, fallof range is 2-8 meters inner ring is 2 meters, outer ring is 6 meters, overall radius of whole ult is 8 meters
                    maxOuterRingDamage:200,
                    minOuterRingDamage:20,
                    name:'Meteor Strike'
                },
    melee:30,               
}
export default Doomfist;