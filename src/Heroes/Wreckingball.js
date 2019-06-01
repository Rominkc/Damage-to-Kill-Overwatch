import WreckingballPic from '../Assets/Images/heroes/Wrecking Ball/Wrecking Ball.png';
import WreckingballIcon from '../Assets/Images/heroes/Wrecking Ball/Wrecking Ball-Icon.png';
const Wreckingball = {
        isUnique:true,
        heroName:'Wrecking Ball',
        icon: WreckingballIcon,
        picture:WreckingballPic,
        health:500,
        armor:100,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        minDamage:2.5,
                        maxDamage:5,
                        name:'Quad Cannons'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Wrecking Ball launches a grappling claw, enabling him to anchor to an area and swing from it. 
                        //If he strikes an enemy with a powered-up swing, they’re damaged and knocked back.
                        //Does 50 damage max speed
                        damage:50,
                        name:'Grappling Claw'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Wrecking Ball slams onto the ground below, damaging enemies and launching them upward.
                        //Technically ability one is 'Roll'
                        minDamage:20,
                        maxDamage:100,
                        name:'Piledriver'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Wrecking Ball’s temporary personal shields absorb damage, providing stronger defenses if more opponents are nearby.
                        //+100 temporary shields, +100 per enemy within radius
                        name:'Adaptive Shield'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Wrecking Ball deploys a field of long-lasting proximity mines which explode on contact with enemies.
                        damage:130,
                        name:'Minefield'
                    },
        melee:30,               
}
export default Wreckingball;