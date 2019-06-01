import ZenyattaPic from '../Assets/Images/heroes/Zenyatta/Zenyatta.png';
import ZenyattaIcon from '../Assets/Images/heroes/Zenyatta/Zenyatta-Icon.png';
const Zenyatta = {
        isUnique:true,
        heroName:'Zenyatta',
        icon: ZenyattaIcon,
        picture:ZenyattaPic,
        // 50hp 150 shields but shields have same behavior relative to taking damage as hp
        health:200,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //Zenyatta projects his destructive energy orbs individually.
                        damage:48,
                        name:'Orb of Destruction'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        //Zenyatta projects his destructive energy orbs in a rapid-fire volley after a few seconds spent gathering power.
                        damage:48,
                        name:'Orb of Destruction'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Zenyatta casts an orb over the shoulder of a targeted ally.
                        //So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orb's benefit at a time.
                        healing:30,
                        name:'Orb of Harmony'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as 
                        //Zenyatta maintains line of sight. Only one opponent can suffer the orb's effects at a time.
                        //+25% received
                        name:'Orb of Discord'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Zenyatta enters a state of heightened existence for a short period of time.
                        // While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage and automatically restores his health and that of nearby allies.
                        healing:300,
                        totalHealing:1800,
                        name:'Transcendence'
                    },
        melee:30,               
}
export default Zenyatta;