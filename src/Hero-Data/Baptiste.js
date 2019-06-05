import BaptistePic from '../Assets/Images/heroes/Baptiste/Baptiste.png';
import BaptisteIcon from '../Assets/Images/heroes/Baptiste/Baptiste-Icon.png';
const Baptiste = {
    isUnique:false,
    heroName:'Baptiste',
    icon: BaptisteIcon,
    picture:BaptistePic,
    health:200,
    armor:0,
    primaryFire:{
                    doesDamage:true,
                    canHeadshot:true,
                    hasFallOffDamage:true,
                    // Does three round burst for total of 37.5 or 75 if you hit all shots
                    minDamage:12.5,
                    maxDamage:25,
                    healing:60,
                    name:'Biotic Launcher'
                },
    secondaryFire:{
                    doesDamage:false,
                    canHeadshot:false,
                    hasFallOffDamage:false,
                    damage:0,
                    healing:0,
                    name:'N/A'
                  },
        // 'Lshift' ability
    abilityOne:{
                    doesDamage:false,
                    canHeadshot:false,
                    hasFallOffDamage:false,
                    // Does 30 healing per second
                    healing:150,
                    name:'Regenerative Burst'
                },
        // 'e' ability
    abilityTwo:{
                    doesDamage:false,
                    canHeadshot:false,
                    hasFallOffDamage:false,
                   // Prevents allies from dying, will healing any ally below 20% to 20% hp instantly, and not allow an ally to drop below 20%
                    name:'Immortality Field'
                },
        // 'q'|ultimate ability
    abilityThree:{
                    doesDamage:false,
                    canHeadshot:false,
                    hasFallOffDamage:false,
                  // Increases damage and healing by 100% i.e instead of doing 10 dmg you would do 20 dmg 100% + 100% = 200% = 2x multiplier
                    name:'Amplification Matrix'
                },
    melee:30,               
}
export default Baptiste;