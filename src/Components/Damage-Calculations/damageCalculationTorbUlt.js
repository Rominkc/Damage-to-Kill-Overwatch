import roundToX from '../roundToX';   


//Almost identical to damageCalculationBTD but damagePPToArmor is 1.1875 instead of .8 because of how torb's ult interacts with armor; does 190 vs armor instead of 170
//To figure out how much it was amplified against armor divided 190/160 to get 1.1875, so each point of damage is amplified by that much against armor

const damageCalculationTorbUlt= (abilityName,setAbilitySummary,setArmor,setHealth,armor,health,damage, headShotModifier = 1, discordModifier = 1,...amplifiers) => {
    
    let damageAmplifier = amplifiers.reduce((totalAmp, currAmp) => totalAmp + currAmp, 0)
    damageAmplifier += 1
    damageAmplifier = damageAmplifier * discordModifier * headShotModifier
    
    //console.log(damageAmplifier)
    damage = roundToX(damage * damageAmplifier,2)
    const damagePPToArmor = 1.1875 // Damage per point(of damage) to armor  i.e 1 damage would do 1.1875 damage because torb's ult does more damage againsta rmor

    const carryOverDamageCalcBTD =(remainingArmor,shouldSetHealth)=> {
      
        let remainingDamage = 0;
        let pointOfDamageUsed = 0;
        let adjustedDamage = 0;
        while(remainingArmor > 0 ){
            remainingArmor-=damagePPToArmor;
            remainingArmor=roundToX(remainingArmor,2) //Needed because sometimes too many decimal places were caused from subtracting 1.1875 and this would lead to an incorrect calculation 
            adjustedDamage+=damagePPToArmor;
            //console.log(remainingArmor + " Inside carryOverDamageCalcDPShot ")
            if(remainingArmor < 0){
                remainingDamage+=remainingArmor*-1 //accounts for remainingArmor being a negative value
                adjustedDamage+=remainingArmor //accounts for/counteracts the damage that was just added to remainingDamage, as remainingDamage will be added to adjustedDamage at the end of all calculations
            }
            pointOfDamageUsed++;
        }
        //Points of damage used i.e if ability had total of 60 damage and armor was 19, 16 points of damage(16 *1.1875 = 19)would be increased by 1.1875, so there would be 41 points left damage that was not increased
        const pointsOfDamageRemaining = damage - pointOfDamageUsed;
        //if remaining armor fell below 0, add this number to pointsOfDamageRemaining for final calculation 
        //i.e remainingDamage is .4 so you add that + pointsOfDamageRemaining to get final number, but if armor hit exactly 0, then remainingDamage would just equal pointsOfDamageRemaining
        remainingDamage += pointsOfDamageRemaining 
        adjustedDamage+=remainingDamage//add unreduced damage + reduced damage to get adjusted damage for final number used in AbilitySummary 
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
        if (remainingArmor - remainingDecimal * 1.1875 <= 0 )
        { return true }
        //else return false because killHero still has armor left
        else { return false }
        
    }
    
    armor <= 0 ? setHealth(prevHealth => prevHealth - damage >= 0 ?  roundToX(prevHealth - damage,2) : 0 )
    :noRemainingArmorCalc(armor) ? carryOverDamageCalcBTD(armor,true)
    : setArmor(prevArmor => roundToX(prevArmor - (damage * 1.1875) , 2 ) )
    
    
    setAbilitySummary((prevAbilitySummary)=>{
        //adjusts for armor
        const adjustedDamage =  armor <= 0 ? 0
        :noRemainingArmorCalc(armor) ? carryOverDamageCalcBTD(armor,false)
        :roundToX( damage * 1.1875 , 2 )

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
export default damageCalculationTorbUlt;