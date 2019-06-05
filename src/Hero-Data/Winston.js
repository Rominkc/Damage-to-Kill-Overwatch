import WinstonPic from '../Assets/Images/heroes/Winston/Winston.png';
import WinstonIcon from '../Assets/Images/heroes/Winston/Winston-Icon.png';
const Winston = {
        isUnique:true,
        heroName:'Winston',
        icon: WinstonIcon,
        picture:WinstonPic,
        health:400,
        armor:100,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //Winston’s weapon fires a short-range electric barrage for as long as he holds down the trigger.
                        //60 damage per second, 20 rounds per second = 3 damage per round
                        damage:60,
                        pPerSecond:20,
                        name:'Tesla'
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
                        //Assisted by his energy pack, Winston lunges through the air, dealing significant damage and staggering nearby enemies when he lands.
                        jumpDamage:1,
                        minDamage:1,
                        maxDamage:50,
                        name:'Jump Pack'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Winston’s barrier projector extends a bubble-shaped field that absorbs damage until it's destroyed. 
                        //Allies protected by the barrier can return fire from within it.
                        name:'Barrier Projector'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Winston embraces his animal nature, significantly boosting his health and making him very difficult to kill, strengthening his melee attack,
                        // and allowing him to use his Jump Pack ability more frequently. While raging, Winston can only make melee and Jump Pack attacks.
                        //900 health, 100 armor
                        damage:40,
                        name:'Primal Rage'
                    },
        melee:30,               
}
export default Winston;