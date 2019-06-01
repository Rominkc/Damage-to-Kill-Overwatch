import Soldier76Pic from '../Assets/Images/heroes/Soldier76/Soldier76.png';
import Soldier76Icon from '../Assets/Images/heroes/Soldier76/Soldier76-Icon.png';
const Soldier76 = {
        isUnique:true,
        heroName:'Soldier76',
        icon: Soldier76Icon,
        picture:Soldier76Pic,
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        minDamage:10,
                        maxDamage:20,
                        name:'Heavy Pulse Rifle'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        directHitDamage:120,
                        minSplashDamage:40,
                        maxSplashDamage:80,
                        minSelfDamage:20,
                        maxSelfDamage:40,
                        name:'Helix Rockets'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        
                        name:'Sprint'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //40 health per second, 204 health over entire duration
                        healing:40,
                        name:'Biotic Field'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:true,
                        //Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs.
                        // If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target.
                        minDamage:10,
                        maxDamage:20,
                        name:'Tactical Visor'
                    },
        melee:30,               
}
export default Soldier76;