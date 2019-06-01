import ReaperPic from '../Assets/Images/heroes/Reaper/Reaper.png';
import ReaperIcon from '../Assets/Images/heroes/Reaper/Reaper-Icon.png';
const Reaper = {
        isUnique:true,
        heroName:'Reaper',
        icon: ReaperIcon,
        picture:ReaperPic,
        health:250,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //2.1 - 7 per pellet, 42 - 140 per shot
                        minDamage:42,
                        maxDamage:140,
                        pPerShot:20,
                        name:'Hellfire Shotguns'
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
                        //Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, 
                        //but cannot fire his weapons or use other abilities.
                        name:'Wraith Form'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //After marking a destination, Reaper disappears and reappears at that location.
                        name:'Shadow Step'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //170 per second damage, 510 total
                        //Does 155 per second against armor so by simple math : 15 / 3 = 5 170 /5 = 34 damage for each hit/projectile
                        damage:170,
                        pPerSecond:5,
                        name:'Death Blossom'
                    },
        melee:30,               
}
export default Reaper;