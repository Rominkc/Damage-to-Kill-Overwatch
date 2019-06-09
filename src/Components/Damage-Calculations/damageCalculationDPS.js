import roundToX from '../roundToX';   


//Takes one more param than damageCalculation which is pPerS, this represents how many projectiles are shot out with each ability i.e doomfist shoots 11 pellets per shot
// or how many projectiles are shot out per second based on ammo consumption i.e Zarya consumes 20 ammo per second and does 95 damage per second
//Main difference with this function and general function is how the damage is calculated vs armor
//Since it is multiple hits vs armor each instance of damage is reduced by half or 3, as opposed to the total damage being reduced by half or 3
// (damage-(pPerS*3)) finds damage reduced for instances of damage greater than or = 6, and damage/2 finds damage reduced for instances of damage less than 6
// reduced damage for instances of damage less than 6 can also be found by damage - (pPerS * damagePerProjectile)/2 
//
const damageCalculationDPS = (abilityName,setAbilitySummary,setArmor,setHealth,armor,health,damage,pPerS = 1, headShotModifier = 1, discordModifier = 1,...amplifiers) => {
    
    let damageAmplifier = amplifiers.reduce((totalAmp, currAmp) => totalAmp + currAmp, 0)
    damageAmplifier += 1
    damageAmplifier = damageAmplifier * discordModifier * headShotModifier
    
    //console.log(damageAmplifier)
    damage = roundToX(damage * damageAmplifier,2)
    const damagePerProjectile = damage / pPerS

    const carryOverDamageCalcDPShot =(remainingArmor,shouldSetHealth)=> {
        const damagePPToArmor= damagePerProjectile < 6 ? roundToX(damagePerProjectile/2,2) : roundToX(damagePerProjectile -3,2);
        let remainingDamage = 0;
        let projectilesUsed = 0;
        let adjustedDamage=0;
        while(remainingArmor > 0 ){
            remainingArmor-=damagePPToArmor;
            adjustedDamage+=damagePPToArmor;
            //console.log(remainingArmor + " Inside carryOverDamageCalcDPShot")
            if(remainingArmor < 0){
                remainingDamage+=remainingArmor*-1 //accounts for remainingArmor being a negative value
                adjustedDamage+=remainingArmor //accounts for/counteracts the damage that was just added to remainingDamage, as remainingDamage will be added to adjustedDamage at the end of all calculations
            }
            projectilesUsed++;
        }
        const projectilesRemaining = pPerS - projectilesUsed;
        remainingDamage += projectilesRemaining * damagePerProjectile
        adjustedDamage+=remainingDamage
        if(shouldSetHealth){
            setArmor(0)
            remainingDamage > health ? setHealth(0) : setHealth(prevHealth => roundToX(prevHealth - remainingDamage,2))
        }
        return roundToX(adjustedDamage,2)
    } 

    const noRemainingArmorCalc=(remainingArmor)=>{
        // Damage per projectile to armor
        const damagePPToArmor= damagePerProjectile < 6 ? roundToX(damagePerProjectile/2,2) : roundToX(damagePerProjectile -3,2);
        for(let i=0; i < pPerS; i++ ){
            remainingArmor-=damagePPToArmor
            //console.log(remainingArmor + " Inside remainingArmorCalc")
           //If armor ever falls below zero than damage should be calculated for projectiles that hit armor, and then the projectiles that hit after armor was depleted
            if (remainingArmor <= 0)
            {return true}
        }
        //else return false because killHero still has armor left
        return false;
    }
    
    armor <= 0 ? setHealth(prevHealth => prevHealth - damage >= 0 ?  roundToX(prevHealth - damage,2) : 0 )
    //:damagePerProjectile < 6 && armor - damage/2 <= 0 ? carryOverDamageCalcDPShot(false)
    //:armor - (damage-(pPerS*3)) < 0 ? carryOverDamageCalcDPShot(true)
    :noRemainingArmorCalc(armor) ? carryOverDamageCalcDPShot(armor,true)
    :damagePerProjectile < 6 ? setArmor(prevArmor => roundToX(prevArmor -  damage/2,2) )
    : setArmor(prevArmor => roundToX(prevArmor - (damage-(pPerS*3)),2) )
    
    
    setAbilitySummary((prevAbilitySummary)=>{
        //adjusts for armor
        //const adjustedDamage = damagePerProjectile > 6 ? roundToX((damage-(pPerS*3)),2) : roundToX(damage /  2 , 2);
        const adjustedDamage =  armor <= 0 ? 0
        :noRemainingArmorCalc(armor) ? carryOverDamageCalcDPShot(armor,false)
        :damagePerProjectile < 6 ? roundToX(damage /  2 , 2)
        :roundToX((damage-(pPerS*3)),2) 

        const damageAmpToPercent = roundToX(((damageAmplifier-1)*100),2)
        const displayDamage = damage //damage > health && armor === 0 ? health :damage
        const updatedAbilitySummary = health === 0 ? prevAbilitySummary
       
        :damageAmplifier === 1 && prevAbilitySummary==='' && armor > 0 ? prevAbilitySummary+ `${abilityName} did ${adjustedDamage} damage`
        :damageAmplifier > 1 && prevAbilitySummary==='' && armor > 0 ? prevAbilitySummary + `${abilityName} was amplified by +${damageAmpToPercent}% and did ${adjustedDamage} damage`
        :damageAmplifier === 1 && armor > 0 ? prevAbilitySummary+ ` => ${abilityName} did ${adjustedDamage} damage`
        :damageAmplifier > 1 && armor > 0 ? prevAbilitySummary + `  => ${abilityName} was amplified by +${damageAmpToPercent}% and did ${adjustedDamage} damage`
       
        :damageAmplifier === 1 && prevAbilitySummary==='' ? prevAbilitySummary+ `${abilityName} did ${displayDamage} damage`
        :damageAmplifier > 1 && prevAbilitySummary==='' ? prevAbilitySummary + `${abilityName} was amplified by +${damageAmpToPercent}% and did ${displayDamage} damage`
        :damageAmplifier === 1 ? prevAbilitySummary+ ` => ${abilityName} did ${displayDamage} damage`
        :prevAbilitySummary + `  => ${abilityName} was amplified by +${damageAmpToPercent}% and did ${displayDamage} damage`;

        return(updatedAbilitySummary) })
}
export default damageCalculationDPS;