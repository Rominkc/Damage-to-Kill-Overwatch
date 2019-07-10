import roundToX from '../roundToX';
/* Function deducts health or armor from current target hero selected based on ability, if health would fall below 0, updates health to 0 instead 
   If target has armor does 3 less damage for each attack to armor until target no longer has armor 
   Note: if the damage is less than 6, armor halves the damage instead.
The function requires you to enter the first nine parameters, the rest are optional Type in either 1 or undefined if ability can't headshot to use option amplifiers
...rest param gets all amplifiers that are currently applied, these values are all additive in the equation they are used so order input does not matter
the reasoning behind this is some abilities are unable to be affected by certain amplifiers such as Hanzo's Dragonstrike
All possible amplifiers include  Ana = nanoBoostAmp, Baptiste = matrixAmp, Orisa = superchargerAmp, and Mercy = damageBoostAmp

*/

const damageCalculation = (
  abilityName,
  setAbilitySummary,
  setArmor,
  setHealth,
  armor,
  health,
  damage,
  headShotModifier = 1,
  discordModifier = 1,
  ...amplifiers
) => {
  //  The formula for all damage amplifications applied would be (1 + (0.5 + 0.5 + 0.3 + 1)) * 1.25 = 4.125 * (2 or 2.5) = 8.25 or 10.3125
  /* Function uses reduce to add all numbers in the array returned from ...amplifiers parameter, Initial value as second param makes it so multiplier returns
    0 if there are no ...amplifiers (rest) params provided Note: If no amplifiers are active damageAmplifier will = 1 */
  let damageAmplifier = amplifiers.reduce(
    (totalAmp, currAmp) => totalAmp + currAmp,
    0
  );
  //Add 1 to damage multiplier to account for base damage in formula i.e 1 + (amplifiers) * 1.25 * (2 or 2.5) = final damage amplifier
  damageAmplifier += 1;
  damageAmplifier =
    damageAmplifier *
    discordModifier *
    (abilityName === "Widow's Kiss (Scope)" && headShotModifier === 2
      ? headShotModifier + 0.5
      : headShotModifier);
  //console.log(damageAmplifier)
  damage = roundToX(damage * damageAmplifier, 2);

  const carryOverDamageCalc = () => {
    //Calculated remaining damage to be subtracted from health
    const remainingDamage =
      damage < 6
        ? roundToX(armor - damage / 2, 2)
        : roundToX(armor - damage + 3, 2);
    setArmor(0);
    //Check for edge case where remainingDamage would cause health to fall below 0 because of being amplified in some way, if true, set health to 0
    //if not true set health to the appropriate number based on remainingDamage
    remainingDamage * -1 > health
      ? setHealth(0)
      : setHealth(prevHealth => roundToX(prevHealth + remainingDamage, 2));
  };

  //check if target still has armor, if not, then start subtracting damage from health instead of armor
  armor <= 0
    ? setHealth(prevHealth =>
        prevHealth - damage >= 0 ? roundToX(prevHealth - damage, 2) : 0
      )
    : //if target still has armor, check if the damage to be subtracted is less than 6 because damage less than 6 does half as much damage per hit instead of 3 less damage per hit
    //Also check if damage would cause armor would drop below 0; if damage is higher than 6, check if damage would cause armor to drop below 0 so that you can subtract the remainder from the health pool
    (damage < 6 && armor - damage / 2 <= 0) || armor - damage + 3 < 0
    ? carryOverDamageCalc()
    : //if target still has armor, and damage is less than 6, do half original damage and subtract from armor
    damage < 6
    ? setArmor(prevArmor => roundToX(prevArmor - damage / 2, 2))
    : //if damage is greater than 6 or equal to 6 and target still has armor, subtract damage from armor and add 3 to account for damage reduction as each hit does 3 less damage to armor
      setArmor(prevArmor => roundToX(prevArmor - damage + 3, 2));
  //setAbilitySummary displays the damage and amplifier, after all calculations, to the user on selected 'hero page'
  // Displays nothing if hero has 0 health

  setAbilitySummary(prevAbilitySummary => {
    //adjusts for armor
    const adjustedDamage =
      damage > 6 ? roundToX(damage - 3, 2) : roundToX(damage / 2, 2);
    //convert damagAmplifier to percentage value
    const damageAmpToPercent = roundToX((damageAmplifier - 1) * 100, 2);
    //if damage would overkill, make damage equal to health
    const displayDamage = damage; //damage > health && armor === 0 ? health :damage
    //check if hero is dead but leave ability summary the same unless a new hero is clicked
    const updatedAbilitySummary =
      health === 0
        ? prevAbilitySummary
        : //first two of each set of cases check if ability is first ability to be added to summary if it is ommit the '=>' from beginning
        //4 cases check for amplification against armor
        damageAmplifier === 1 && prevAbilitySummary === '' && armor > 0
        ? prevAbilitySummary + `${abilityName} did ${adjustedDamage} damage`
        : damageAmplifier > 1 && prevAbilitySummary === '' && armor > 0
        ? prevAbilitySummary +
          `${abilityName} was amplified by +${damageAmpToPercent}% and did ${adjustedDamage} damage`
        : damageAmplifier === 1 && armor > 0
        ? prevAbilitySummary + ` => ${abilityName} did ${adjustedDamage} damage`
        : damageAmplifier > 1 && armor > 0
        ? prevAbilitySummary +
          `  => ${abilityName} was amplified by +${damageAmpToPercent}% and did ${adjustedDamage} damage`
        : //4 cases check for amplification against health (so if target doesn't have armor, or armor has been depleted)
        damageAmplifier === 1 && prevAbilitySummary === ''
        ? prevAbilitySummary + `${abilityName} did ${displayDamage} damage`
        : damageAmplifier > 1 && prevAbilitySummary === ''
        ? prevAbilitySummary +
          `${abilityName} was amplified by +${damageAmpToPercent}% and did ${displayDamage} damage`
        : damageAmplifier === 1
        ? prevAbilitySummary + ` => ${abilityName} did ${displayDamage} damage`
        : prevAbilitySummary +
          `  => ${abilityName} was amplified by +${damageAmpToPercent}% and did ${displayDamage} damage`;

    return updatedAbilitySummary;
  });
};
export default damageCalculation;
