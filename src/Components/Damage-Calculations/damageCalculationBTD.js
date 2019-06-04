import roundToX from '../roundToX';   


//Stands for damage calculation beam type damage. Beam type damage does 20% less against armor. So each 1 damage would do .8 damage instead against armor
//
const damageCalculationBTD = (abilityName,setAbilitySummary,setArmor,setHealth,armor,health,damage, headShotModifier = 1, discordModifier = 1,...amplifiers) => {
    
    let damageAmplifier = amplifiers.reduce((totalAmp, currAmp) => totalAmp + currAmp, 0)
    damageAmplifier += 1
    damageAmplifier = damageAmplifier * discordModifier * headShotModifier
    
    console.log(damageAmplifier)
    damage = roundToX(damage * damageAmplifier,2)
    const damagePPToArmor = .8 // Damage per point(of damage) to armor  i.e 1 damage would do .8 damage because it is reduced by 20%

    const carryOverDamageCalcBTD =(remainingArmor,shouldSetHealth)=> {
        
        let remainingDamage = 0;
        let projectilesUsed = 0;
        let adjustedDamage = 0;
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
        
        //Before iterating through all of the damage, check if the whole sum of damage * damagePPToArmor is greater or equal 0,
        // this can cause us to not have to loop through the entire damage on every calculation
        if(armor - (damage * damagePPToArmor) >= 0 ){
            return false;
        }
        //do one less iteration of the loop because damage might have decimals, so check for this outside of the loop
        //for example if damage would 3 it would stop at 2 then  3 - 2 is 1 and you still have correct number of checks
        //or if number is 3.2 it would stop at 3 (damage would be 2.2 which would make i iterate past 2) then you would do 3 - 3.2 which would give you .2 and again the right amount of checks
        let i=0
        for( ; i <  damage - 1; i++ ){
            remainingArmor-=damagePPToArmor
            //console.log(remainingArmor + " Inside remainingArmorCalc")
            //If armor ever falls below zero than damage should be calculated for projectiles that hit armor, and then the projectiles that hit after armor was depleted 
            if (remainingArmor <= 0)
            {return true}
        }
        const remainingDecimal = damage - i;
        if (remainingArmor - remainingDecimal * .8 <= 0 )
        { return true }
        //else return false because killHero still has armor left
        else { return false }
        
    }
    
    armor <= 0 ? setHealth(prevHealth => prevHealth - damage >= 0 ?  roundToX(prevHealth - damage,2) : 0 )
    :noRemainingArmorCalc(armor) ? carryOverDamageCalcBTD(armor,true)
    : setArmor(prevArmor => roundToX(prevArmor - (damage * .8) , 2 ) )
    
    
    setAbilitySummary((prevAbilitySummary)=>{
        //adjusts for armor
        //const adjustedDamage = damagePerProjectile > 6 ? roundToX((damage-(pPerS*3)),2) : roundToX(damage /  2 , 2);
        const adjustedDamage =  armor <= 0 ? 0
        :noRemainingArmorCalc(armor) ? carryOverDamageCalcDPShot(armor,false)
        :damagePerProjectile < 6 ? roundToX(damage /  2 , 2)
        :roundToX((damage-(pPerS*3)),2) 

        const damageAmpToPercent = roundToX(((damageAmplifier-1)*100),2)
       
        const updatedAbilitySummary = health === 0 ? prevAbilitySummary
       
        :damageAmplifier === 1 && prevAbilitySummary==='' && armor > 0 ? prevAbilitySummary+ `${abilityName} did ${adjustedDamage} damage`
        :damageAmplifier > 1 && prevAbilitySummary==='' && armor > 0 ? prevAbilitySummary + `${abilityName} was amplified by +${damageAmpToPercent}% and did ${adjustedDamage} damage`
        :damageAmplifier === 1 && armor > 0 ? prevAbilitySummary+ ` => ${abilityName} did ${adjustedDamage} damage`
        :damageAmplifier > 1 && armor > 0 ? prevAbilitySummary + `  => ${abilityName} was amplified by +${damageAmpToPercent}% and did ${adjustedDamage} damage`
       
        :damageAmplifier === 1 && prevAbilitySummary==='' ? prevAbilitySummary+ `${abilityName} did ${damage} damage`
        :damageAmplifier > 1 && prevAbilitySummary==='' ? prevAbilitySummary + `${abilityName} was amplified by +${damageAmpToPercent}% and did ${damage} damage`
        :damageAmplifier === 1 ? prevAbilitySummary+ ` => ${abilityName} did ${damage} damage`
        :prevAbilitySummary + `  => ${abilityName} was amplified by +${damageAmpToPercent}% and did ${damage} damage`;

        return(updatedAbilitySummary) })
}
export default damageCalculationBTD;