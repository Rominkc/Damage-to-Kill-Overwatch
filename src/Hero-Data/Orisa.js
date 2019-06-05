import OrisaPic from '../Assets/Images/heroes/Orisa/Orisa.png';
import OrisaIcon from '../Assets/Images/heroes/Orisa/Orisa-Icon.png';
const Orisa = {
        isUnique:true,
        heroName:'Orisa',
        icon: OrisaIcon,
        picture:OrisaPic,
        health:200,
        armor:200,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //12 rounds per second, 150 ammo    
                        damage:11,
                        name:'Fusion Driver'
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Launch a graviton charge which can be detonated with the same action. The sphere slows and pulls nearby enemies to it.
                        name:'Halt'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Orisa temporarily reduces damage she takes and cannot be affected by movement-impairing effects. 50%
                        name:'Fortify'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        // Orisa throws out a stationary barrier that can protect her and her allies from enemy fire. 900 health points
                        name:'Protective Barrier'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Orisa deploys a device to increase damage inflicted by allies within her line of sight. 200 health points, +50% damage boost
                        name:'Supercharger'
                    },
        melee:30,               
}
export default Orisa;