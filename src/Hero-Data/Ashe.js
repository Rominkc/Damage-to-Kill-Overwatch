import AshePic from '../Assets/Images/heroes/Ashe/Ashe.png';
import AsheIcon from '../Assets/Images/heroes/Ashe/Ashe-Icon.png';
const Ashe = {
        isUnique:true,
        heroName:'Ashe',
        icon: AsheIcon,
        picture:AshePic,
        health:200,
        armor:0,
        primaryFireUnScoped:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        minDamage:20,
                        maxDamage:40,
                        name:'The Viper (Semi Auto)'
                    },
        primaryFireScoped:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        minDamage:42.5,
                        maxDamage:85,
                        name:'The Viper (Scoped)'
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        name:'N/A'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        // Can be do a max of 75 or 30 depending on how far target is from explosion
                        minDamage:30,
                        maxDamage:75,
                        // Damage done once target is hit and get burn DoT
                        burnDamage:100,
                        name:'Dynamite'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:true,
                        canHeadshot:false,
                        //	6 per pellet, 90 per shot
                        damage:90,
                        pPerShot:15,
                        name:'Coach Gun'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        // from initial charge
                        chargeDamage:120,
                        // does 112 damage per second and does 1092 overall shoots 8 bullets per second
                        armCannonDamage:14,
                        name:'B.O.B'
                    },
        melee:30,               
}
export default Ashe;