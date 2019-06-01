import AnaPic from '../Assets/Images/heroes/Ana/Ana.png';
import AnaIcon from '../Assets/Images/heroes/Ana/Ana-Icon.png';
const Ana = {
        isUnique:false,
        heroName:'Ana',
        icon: AnaIcon,
        picture:AnaPic,
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        damage:70,
                        healing:75,
                        name:'Biotic Rifle'
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        damage:0,
                        healing:0,
                        name:'N/A'
                      },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        damage:5,
                        name:'Sleep Dart'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        damage:60,
                        healing:100,
                        name:'Biotic Grenade'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:false,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        damage:0,
                        healing:250,
                        name:'Nano Boost'
                    },
        melee:30,               
}
export default Ana;

/* Base Hero JSON template
const heroname = {
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        damage:70,
                        healing:75,
                        name:'Biotic Rifle'
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        damage:0,
                        healing:0,
                        name:'N/A'
                      },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        damage:5,
                        name:'Sleep Dart'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:true,
                        canHeadshot:false,
                        damage:60,
                        healing:100,
                        name:'Biotic Grenade'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:false,
                        canHeadshot:false,
                        damage:0,
                        healing:250,
                        name:'Nano Boost'
                    },
        melee:15,               
}
export default heroname;
*/