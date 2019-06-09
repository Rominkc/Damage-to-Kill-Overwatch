import roundToX from '../roundToX';   
//Overwatch changed it so DoT abilities do the same amount of damage for armor and health, so the only checks that need to be made is if the target has armor or not
/*Heroes that use this type of damage are as follows:
Damage over time effects no longer mitigated by armor
Ana: Primary Fire
Ashe: Dynamite
Hanzo: Dragonstrike
Mei: Blizzard
Moira: Biotic Orb
Widowmaker: Venom Mine
Zarya: Graviton Surge
*/

const damageCalculationDoT = (abilityName,setAbilitySummary,setArmor,setHealth,armor,health,damage,headShotModifier = 1, discordModifier = 1,...amplifiers) => {
    
   
    let damageAmplifier = amplifiers.reduce((totalAmp, currAmp) => totalAmp + currAmp, 0)
    damageAmplifier += 1
    damageAmplifier = damageAmplifier * discordModifier * headShotModifier
    //console.log(damageAmplifier)
    damage = roundToX(damage * damageAmplifier,2)
  
    const carryOverDamageCalcDoT =()=> {

        const remainingDamage = roundToX(armor - damage,2)
        remainingDamage * -1 > health ? setHealth(0) : setHealth(prevHealth => roundToX(prevHealth + remainingDamage,2))
        return 0; // Returns 0 for setArmor function which will be set to 0 if this condition triggers

    } 

    
    armor <= 0 ? setHealth(prevHealth => prevHealth - damage >= 0 ?  roundToX(prevHealth - damage,2) : 0 ) 
    : setArmor(prevArmor => prevArmor - damage >= 0 ? roundToX(prevArmor - damage,2) : carryOverDamageCalcDoT() )
   
    
    setAbilitySummary((prevAbilitySummary)=>{

        //convert damagAmplifier to percentage value
        const damageAmpToPercent = roundToX(((damageAmplifier-1)*100),2)
        const displayDamage = damage //damage > health && armor === 0 ? health :damage
        //check if hero is dead but leave ability summary the same unless a new hero is clicked
        const updatedAbilitySummary = health === 0 ? prevAbilitySummary
        //4 cases check for amplification against health or armor as it does the same damage against either unlike other abilities damage calculations
        :damageAmplifier === 1 && prevAbilitySummary==='' ? prevAbilitySummary+ `${abilityName} did ${displayDamage} damage`
        :damageAmplifier > 1 && prevAbilitySummary==='' ? prevAbilitySummary + `${abilityName} was amplified by +${damageAmpToPercent}% and did ${displayDamage} damage`
        :damageAmplifier === 1 ? prevAbilitySummary+ ` => ${abilityName} did ${displayDamage} damage`
        :prevAbilitySummary + `  => ${abilityName} was amplified by +${damageAmpToPercent}% and did ${displayDamage} damage`;

        return(updatedAbilitySummary) })
}
export default damageCalculationDoT;