import RoadhogPic from '../Assets/Images/heroes/Roadhog/Roadhog.png';
import RoadhogIcon from '../Assets/Images/heroes/Roadhog/Roadhog-Icon.png';
const Roadhog = {
        isUnique:true,
        heroName:'Roadhog',
        icon: RoadhogIcon,
        picture:RoadhogPic,
        health:600,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //1.8 - 6 per pellet, 45 - 150 per shot, 25 pellets per shot
                        minDamage:45,
                        maxDamage:150,
                        pPerShot:25,
                        name:'Scrap Gun(Short)'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        //Pre-detonation: 50, Post-detonation: 1.8 - 6 per pellet, 45 - 150 per shot
                        //Post-detonation: 15 to 30 meters, starting at the point of detonation
                        preDetonationDamage:50,
                        minDamage:45,
                        maxDamage:150,
                        pPerShot:25,
                        name:'Scrap Gun(Medium)'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Roadhog hurls his chain at a target; if it catches, he yanks them into close range.
                        damage:30,
                        name:'Chain Hook'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Roadhog restores a chunk of his health over a brief period of time.
                        selfHealing:300,
                        name:'Take A Breather'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:true,
                        //7 per pellet, 4928 overall, 128 pellets per second
                        damage:896,
                        pPerShot:128,
                        name:'Whole Hog'
                    },
        melee:30,               
}
export default Roadhog;