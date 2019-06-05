import BastionPic from '../Assets/Images/heroes/Bastion/Bastion.png';
import BastionIcon from '../Assets/Images/heroes/Bastion/Bastion-Icon.png';
const Bastion = {
    isUnique:true,
    heroName:'Bastion',
    icon: BastionIcon,
    picture:BastionPic,
    health:200,
    armor:100,
    primaryFireRecon:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:true,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    minDamage:10,
                    maxDamage:20,
                    name:'Configuration: Recon'
                },
    primaryFireSentry:{
                    doesDamage:true,
                    canHeadshot:false,
                    hasFallOffDamage:true,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    minDamage:7.5,
                    maxDamage:15,
                    name:'Configuration: Sentry'
                },
    secondaryFire:{
                    doesDamage:false,
                    canHeadshot:false,
                    name:'N/A'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:false,
                    canHeadshot:false,
                    //Changes Bastion into turret form
                    name:'Reconfigure'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:false,
                    canHeadshot:false,
                    //Does 75 healing per second
                    healing:75,
                    name:'Self-Repair'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    canHeadshot:false,
                    // from hitting a rocket directly
                    directHitDamage:205,
                    // if hit target, but not directly has 4 meter radius
                    splashDamage:56,
                    // if you hit yourself
                    selfDamage:28,
                    name:'Configuration: Tank'
                },
    melee:30,               
}
export default Bastion;