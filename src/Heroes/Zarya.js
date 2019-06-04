import ZaryaPic from '../Assets/Images/heroes/Zarya/Zarya.png';
import ZaryaIcon from '../Assets/Images/heroes/Zarya/Zarya-Icon.png';
const Zarya = {
        isUnique:true,
        heroName:'Zarya',
        icon: ZaryaIcon,
        picture:ZaryaPic,
        // 200hp and 200 shields but shields have same behavior relative to taking damage as hp
        health:400,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //95 Damage per second, 20 rounds of ammo per second 95/20 = 4.75 damage each tick <== Might not be 100% accurate because use of ammo might not be indicative of how many ticks
                        damage:95,
                        pPerSecond:20,
                        name:'Particle Cannon'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        minDamage:9.4,
                        maxDamage:47,
                        name:'Particle Cannon'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        //The Particle Cannon can emit a personal barrier that shields Zarya against incoming attacks, 
                        //redirecting their energy to enhance her weapon’s damage and the width of its beam.
                        name:'Particle Barrier'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Zarya surrounds one of her teammates with an energy barrier that simultaneously absorbs fire and boosts the power of her Particle Cannon.
                    
                        name:'Projected Barrier'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Impact: 5, Damage over time: 4.68 per second, 18.72 overall 
                        //Zarya launches a gravity bomb that draws in enemy combatants and deals damage while they’re trapped.
                        impactDamage:5,
                        damagePerSecond:4.68,
                        damageOverTime:18.72,
                        name:'Graviton Surge'
                    },
        melee:30,               
}
export default Zarya;