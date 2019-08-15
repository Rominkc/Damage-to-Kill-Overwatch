import React from 'react';
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDoT from '../../Damage-Calculations/damageCalculationDoT';
import damageCalculationBTD from '../../Damage-Calculations/damageCalculationBTD';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo';
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip'; //Custom react-tool-tip to give baseline style to all buttons

//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const MoiraPage = props => {
  const Moira = heroArray[14];
  // Create necessary state for the page
  // eslint-disable-next-line
  const [
    headShotModifier,
    setHeadShotModifier,
    discordModifier,
    setDiscordModifier,
    nanoBoostAmp,
    setNanoBoostAmp, // eslint-disable-next-line
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
        <h1 className='header-dmg2kOW'>{Moira.heroName}</h1>
        <img
          src={Moira.picture}
          className='chosen-hero-img'
          alt={Moira.heroName}
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
            <li>{Moira.secondaryFire.name} :</li>
            <li>{Moira.abilityOne.name} : </li>
            <li>{Moira.abilityThree.name} :</li>
            <li>Melee :</li>
          </ul>
          <ul className='hero-abilities-ul'>
            <li>
              <button
                data-tip={btnAbilityDescriptions.DPS}
                onClick={() =>
                  damageCalculationBTD(
                    Moira.secondaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Moira.secondaryFire.damage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    superchargerAmp,
                    damageBoostAmp
                  )
                }
              >
                DPS
              </button>
            </li>
            <li>
              <button
                data-tip={btnAbilityDescriptions.DoT}
                onClick={() =>
                  damageCalculationDoT(
                    Moira.abilityOne.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Moira.abilityOne.damageOverTime,
                    undefined,
                    undefined
                  )
                }
              >
                DoT
              </button>
              <button
                data-tip={btnAbilityDescriptions.DPS}
                onClick={() =>
                  damageCalculationDoT(
                    Moira.abilityOne.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Moira.abilityOne.damagePerSecond,
                    undefined,
                    undefined
                  )
                }
              >
                DPS
              </button>
            </li>
            <li>
              <button
                data-tip={btnAbilityDescriptions.DPS}
                onClick={() =>
                  damageCalculationBTD(
                    Moira.abilityThree.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Moira.abilityThree.damage,
                    undefined,
                    discordModifier,
                    nanoBoostAmp,
                    superchargerAmp,
                    damageBoostAmp
                  )
                }
              >
                DPS
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
                    Moira.melee,
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
export default MoiraPage;
