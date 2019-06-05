import MoiraPic from '../Assets/Images/heroes/Moira/Moira.png';
import MoiraIcon from '../Assets/Images/heroes/Moira/Moira-Icon.png';
const Moira = {
        isUnique:true,
        heroName:'Moira',
        icon: MoiraIcon,
        picture:MoiraPic,
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //80 health per second, 65 health over 4 seconds 
                        healing:80,
                        healingOverTime:65,
                        name:'Biotic Grasp'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        // Does 50 Damage per second, and heals self for 30 per second
                        damage:50,
                        selfHealing:30,
                        name:'Biotic Grasp'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Up to 200 damage over 4 seconds (50 per second) 200 damage of time
                        damageOverTime:200,
                        damagePerSecond:50,
                        //Up to 300 health over 4 seconds (75 per second)
                        healing:300,
                        name:'Biotic Orb'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Moira's movement speed increases while making her invulnerable to damage.
                        name:'Fade'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Moira channels a long-range beam that heals allies, damages enemies, and bypasses barriers.
                        damage:70,
                        healing:140,
                        selfHealing:50,
                        name:'Coalescence'
                    },
        melee:30,               
}
export default Moira;