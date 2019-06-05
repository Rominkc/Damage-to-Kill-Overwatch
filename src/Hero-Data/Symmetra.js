import SymmetraPic from '../Assets/Images/heroes/Symmetra/Symmetra.png';
import SymmetraIcon from '../Assets/Images/heroes/Symmetra/Symmetra-Icon.png';
const Symmetra = {
        isUnique:true,
        heroName:'Symmetra',
        icon: SymmetraIcon,
        picture:SymmetraPic,
        //has 100hp 100 shields but shield share same characteristic as HP except it regenerates after a certain amount of time
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //Symmetra’s weapon emits a ranged beam. It deals continuous damage that increases the longer it is connected.
                        //Levels up by hitting an enemy or an enemy object (e.g. barrier, turret, mine, etc.) for 1.33 seconds. 
                        //If the beam is not hitting anything, it decays at a rate of 1 level per 2.0 seconds.
                        levelOneDamage:65,
                        levelTwoDamage:130,
                        levelThreeDamage:195,
                        pPerSecond:7,
                        name:'Photon Projector(Beam)'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Takes 1 second to fully charge and can be held for 1 second. Damage numbers based off full charge
                        directHitDamage:120,
                        minSplashDamage:15,
                        maxSplashDamage:60,
                        name:'Photon Projector(Projectile)'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Symmetra launches a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. 
                        //Up to three turrets can be built on the battlefield at once.
                        //Projectile moves 15 meter per second
                        damage:50,
                        pPerSecond:15,
                        name:'Sentry Turret'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Symmetra places a temporary teleporter exit pad at a distance and connects it to a teleporter entry pad at her current location.
                        // Allies (and some of their abilities, such as Junkrat’s RIP-Tire) can travel from the entry pad to the exit pad instantly.
                        name:'Teleporter'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Symmetra deploys a massive energy barrier which prevents ranged attacks and is big enough to cut through the entire map.
                        name:'Photon Barrier'
                    },
        melee:30,               
}
export default Symmetra;