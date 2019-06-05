import PharahPic from '../Assets/Images/heroes/Pharah/Pharah.png';
import PharahIcon from '../Assets/Images/heroes/Pharah/Pharah-Icon.png';
const Pharah = {
        isUnique:true,
        heroName:'Pharah',
        icon: PharahIcon,
        picture:PharahPic,
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        directHitDamage:120,
                        minSplashDamage:20,
                        maxSplashDamage:65,
                        minSelfDamage:10,
                        maxSelfDamage:32.5,
                        name:'Rocket Launcher'
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
                        //Propelled by her suit’s thrusters, Pharah soars high into the air.
                        name:'Jump Jet'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Pharah looses a wrist rocket that knocks back any enemies it strikes.
                        name:'Concussive Blast'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies.
                        minDamage:10,
                        maxDamage:40,
                        name:'Barrage'
                    },
        melee:30,               
}
export default Pharah;