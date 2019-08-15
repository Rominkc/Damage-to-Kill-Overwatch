import React from 'react';
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo';
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip'; //Custom react-tool-tip to give baseline style to all buttons
//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const JunkratPage = props => {
  const Junkrat = heroArray[9];
  // Create necessary state for the page
  // eslint-disable-next-line
  const [
    headShotModifier,
    setHeadShotModifier,
    discordModifier,
    setDiscordModifier,
    nanoBoostAmp,
    setNanoBoostAmp,
    matrixAmp,
    setMatrixAmp,
    superchargerAmp,
    setSuperchargerAmp,
    damageBoostAmp,
    setDamageBoostAmp,
    killHero,
    setKillHero,
    health,
    setHealth,
    armor,
    setArmor,
    abilitySummary,
    setAbilitySummary
  ] = useHeroPageInfo();

  return (
    <div className='hero-page-container'>
      <div className='hero-page-selected-hero'>
        <h1 className='header-dmg2kOW'>{Junkrat.heroName}</h1>
        <img
          src={Junkrat.picture}
          className='chosen-hero-img'
          alt={Junkrat.heroName}
        />

        <AmplificationButtons
          setHeadShotModifier={setHeadShotModifier}
          setDiscordModifier={setDiscordModifier}
          setNanoBoostAmp={setNanoBoostAmp}
          setMatrixAmp={setMatrixAmp}
          setSuperchargerAmp={setSuperchargerAmp}
          setDamageBoostAmp={setDamageBoostAmp}
          canHeadShot={false}
        />

        <div className='hero-abilities'>
          <ul className='hero-abilities-ul'>
            <li>{Junkrat.primaryFire.name} :</li>
            <li>{Junkrat.abilityOne.name} : </li>
            <li>{Junkrat.abilityTwo.name} :</li>
            <li>{Junkrat.abilityThree.name} :</li>
            <li>{Junkrat.passive.name}</li>
            <li>Melee :</li>
          </ul>
          <ul className='hero-abilities-ul'>
            <li>
              <button
                data-tip={btnAbilityDescriptions.DH}
                onClick={() =>
                  damageCalculation(
                    Junkrat.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.primaryFire.directHitDamage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    matrixAmp,
                    superchargerAmp,
                    damageBoostAmp
                  )
                }
              >
                DH
              </button>
              <button
                data-tip={btnAbilityDescriptions.SMn}
                onClick={() =>
                  damageCalculation(
                    Junkrat.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.primaryFire.minSplashDamage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    matrixAmp,
                    superchargerAmp,
                    damageBoostAmp
                  )
                }
              >
                SMn
              </button>
              <button
                data-tip={btnAbilityDescriptions.SMx}
                onClick={() =>
                  damageCalculation(
                    Junkrat.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.primaryFire.maxSplashDamage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    matrixAmp,
                    superchargerAmp,
                    damageBoostAmp
                  )
                }
              >
                SMx
              </button>
            </li>
            <li>
              <button
                data-tip={btnAbilityDescriptions.Mn}
                onClick={() =>
                  damageCalculation(
                    Junkrat.abilityOne.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.abilityOne.minDamage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    superchargerAmp,
                    damageBoostAmp,
                    matrixAmp
                  )
                }
              >
                Mn
              </button>
              <button
                data-tip={btnAbilityDescriptions.Mx}
                onClick={() =>
                  damageCalculation(
                    Junkrat.abilityOne.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.abilityOne.maxDamage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    superchargerAmp,
                    damageBoostAmp,
                    matrixAmp
                  )
                }
              >
                Mx
              </button>
            </li>
            <li>
              <button
                data-tip={btnAbilityDescriptions.X}
                onClick={() =>
                  damageCalculation(
                    Junkrat.abilityTwo.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.abilityTwo.damage,
                    undefined,
                    discordModifier
                  )
                }
              >
                X
              </button>
            </li>
            <li>
              <button
                data-tip={btnAbilityDescriptions.Mn}
                onClick={() =>
                  damageCalculation(
                    Junkrat.abilityThree.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.abilityThree.minDamage,
                    undefined,
                    discordModifier
                  )
                }
              >
                Mn
              </button>
              <button
                data-tip={btnAbilityDescriptions.Mx}
                onClick={() =>
                  damageCalculation(
                    Junkrat.abilityThree.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.abilityThree.maxDamage,
                    undefined,
                    discordModifier
                  )
                }
              >
                Mx
              </button>
            </li>
            <li>
              <button
                data-tip={btnAbilityDescriptions.X}
                onClick={() =>
                  damageCalculation(
                    Junkrat.passive.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.passive.damage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    superchargerAmp,
                    damageBoostAmp,
                    matrixAmp
                  )
                }
              >
                X
              </button>
            </li>
            <li>
              <button
                data-tip={btnAbilityDescriptions.X}
                onClick={() =>
                  damageCalculation(
                    'Melee',
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Junkrat.melee,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    superchargerAmp,
                    damageBoostAmp
                  )
                }
              >
                X
              </button>
            </li>
          </ul>
        </div>
      </div>
      <HeroPageKillHero killHero={killHero} health={health} armor={armor} />
      <AbilitySummary abilitySummary={abilitySummary} />
      <KillHeroList
        setKillHero={setKillHero}
        setHealth={setHealth}
        setArmor={setArmor}
        setAbilitySummary={setAbilitySummary}
      />
      <BtnReactToolTip />
    </div>
  );
};
export default JunkratPage;
