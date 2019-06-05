import SombraPic from '../Assets/Images/heroes/Sombra/Sombra.png';
import SombraIcon from '../Assets/Images/heroes/Sombra/Sombra-Icon.png';
const Sombra = {
        isUnique:true,
        heroName:'Sombra',
        icon: SombraIcon,
        picture:SombraPic,
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        minDamage:2.4,
                        maxDamage:8,
                        name:'Machine Pistol'
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.
                        name:'Hack'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Sombra becomes invisible for a short period of time, during which her speed is boosted considerably.
                        //Attacking, using offensive abilities, or taking damage disables her camouflage.
                        name:'Stealth'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).

                        name:'Translocator'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast.
                        name:'EMP'
                    },
        melee:30,               
}
export default Sombra;