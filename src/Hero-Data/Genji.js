import GenjiPic from '../Assets/Images/heroes/Genji/Genji.png';
import GenjiIcon from '../Assets/Images/heroes/Genji/Genji-Icon.png';
const Genji = {
    isUnique:true,
    heroName:'Genji',
    icon: GenjiIcon,
    picture:GenjiPic,
    health:200,
    armor:0,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:false,
                    // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                    // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                   // 3 Shurikens per shot 3 * 28
                    damage:28,
                    name:'Shuriken'
                },
    secondaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    // same as primary fire but shoots shurikens at a different angle/ wider spread
                    damage:28,
                    name:'Shuriken (Fan of Blades)'
                },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:true,
                    canHeadshot:false,
                    damage:50,
                    name:'Swift Strike'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:false,
                    canHeadshot:false,
                    name:'Deflect'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:true,
                    canHeadshot:false,
                    // Does 120 per swing, 1 swing per 0.9 seconds and ability lasts for 6 seconds
                    damage:120,
                    name:'Dragon Blade'
                },
    melee:30,               
}
export default Genji;