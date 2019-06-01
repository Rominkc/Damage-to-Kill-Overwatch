import WidowmakerPic from '../Assets/Images/heroes/Widowmaker/Widowmaker.png';
import WidowmakerIcon from '../Assets/Images/heroes/Widowmaker/Widowmaker-Icon.png';
const Widowmaker = {
        isUnique:true,
        heroName:'Widowmaker',
        icon: WidowmakerIcon,
        picture:WidowmakerPic,
        health:200,
        armor:0,
        primaryFireScoped:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //0.5 seconds uncharged 12 damage 1.4 seconds fully charged 120 damage
                        minDamage:12,
                        maxDamage:120,
                        name:"Widow's Kiss (Scope)"
                    },
        primaryFireUnScoped:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        minDamage:6.5,
                        maxDamage:13,
                        name:"Widow's Kiss (Automatic Fire)"
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        name:'N/A'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, 
                        //she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.
                        name:'Grappling Hook'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:true,
                        canHeadshot:false,
                        //15 damage per second 75 total
                        //Widowmaker adheres a swiftly-arming venom mine to nearly any surface. 
                        //When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity
                        damage:15,
                        name:'Venom Mine'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time.
                        //This enhanced vision is shared with her allies.
                        name:'Infra-Sight'
                    },
        melee:30,               
}
export default Widowmaker;