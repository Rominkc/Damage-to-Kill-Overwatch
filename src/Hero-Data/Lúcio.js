import LúcioPic from '../Assets/Images/heroes/Lúcio/Lúcio.png';
import LúcioIcon from '../Assets/Images/heroes/Lúcio/Lúcio-Icon.png';
const Lúcio = {
    isUnique:true,
    heroName:'Lúcio',
    icon: LúcioIcon,
    picture:LúcioPic,
    health:200,
    armor:0,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:false,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                    // 20 per shot, 80 per burst (4 shots)
                    damage:20,
                    shotDamage:80, // damage from one shot that shoots 4 projectiles
                    pPerShot:4,
                    name:'Sonic Amplifier'
                },
    secondaryFire:{
                    doesDamage:true,
                    canHeadshot:false,
                    damage:25,
                    name:'Soundwave'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:false,
                    canHeadshot:false,
                    healing:16,
                    selfHealing:12.3,
                    name:'Crossfade'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:false,
                    canHeadshot:false,
                    healing:50,
                    selfHealing:38.5,
                    name:'Amp It Up'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:false,
                    canHeadshot:false,
                    // Gives teammates temporary shields
                    healing:750,
                    name:'Sound Barrier'
                },
    melee:30,               
}
export default Lúcio;