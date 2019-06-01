import ReinhardtPic from '../Assets/Images/heroes/Reinhardt/Reinhardt.png';
import ReinhardtIcon from '../Assets/Images/heroes/Reinhardt/Reinhardt-Icon.png';
const Reinhardt = {
        isUnique:true,
        heroName:'Reinhardt',
        icon: ReinhardtIcon,
        picture:ReinhardtPic,
        health:300,
        armor:200,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        damage:75,
                        name:'Rocket Hammer'
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Reinhardt projects a broad, forward-facing energy shield, which can absorb substantial damage before it is destroyed. 
                        //Though Reinhardt can protect himself and his companions behind the shield, he cannot attack while sustaining it. 2000 shields
                        name:'Barrier Field'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Reinhardt charges forth in a straight line, grabbing hold of enemies in his path. If he collides with a wall, foes he’s carrying suffer extreme damage.
                        //Pin: 1 second stun, Wall collision: 300, Bump: 50
                        bumpDamage:50,
                        pinDamage:300,
                        name:'Charge'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:true,
                        canHeadshot:false,
                        //By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.
                        damage:100,
                        name:'Fire Strike'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Reinhardt forcefully slams his rocket hammer into the ground, knocking down and damaging all enemies in front of him.
                        damage:50,
                        name:'Earthshatter'
                    },
        melee:75,               
}
export default Reinhardt;