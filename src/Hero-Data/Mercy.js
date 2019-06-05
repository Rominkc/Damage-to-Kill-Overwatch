import MercyPic from '../Assets/Images/heroes/Mercy/Mercy.png';
import MercyIcon from '../Assets/Images/heroes/Mercy/Mercy-Icon.png';
const Mercy = {
        isUnique:true,
        heroName:'Mercy',
        icon: MercyIcon,
        picture:MercyPic,
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        // Does 50 healing per second, or amplifies damage by 30%
                        healing:50,
                        name:'Caduceus Staff'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        damage:20,
                        name:'Caduceus Blaster'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.
                        name:'Guardian Angel'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Mercy brings a dead ally back into the fight with full health.
                        name:'Resurrect'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        // Gain the ability to fly. Mercy’s abilities are enhanced. 30% Damage boost to nearby affected targets or 60 healing per second to nearby affected targets.
                        healing:60,
                        selfHealing:20,
                        name:'Valkyrie'
                    },
        melee:30,               
}
export default Mercy;