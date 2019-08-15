import React from 'react';
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDPS from '../../Damage-Calculations/damageCalculationDPS';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo';
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip'; //Custom react-tool-tip to give baseline style to all buttons
//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const SigmaPage = props => {
  const Sigma = heroArray[20];
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
        <h1 className='header-dmg2kOW'>{Sigma.heroName}</h1>
        <img
          src={Sigma.picture}
          className='chosen-hero-img'
          alt={Sigma.heroName}
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
            <li>{Sigma.primaryFire.name} :</li>

            <li>{Sigma.abilityThree.name} :</li>
            <li>Melee :</li>
          </ul>
          <ul className='hero-abilities-ul'>
            <li>
              <button
                data-tip={btnAbilityDescriptions.DH}
                onClick={() =>
                  damageCalculationDPS(
                    Sigma.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Sigma.primaryFire.directHitDamage,
                    Sigma.primaryFire.pPerShot,
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
                  damageCalculationDPS(
                    Sigma.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Sigma.primaryFire.minSplashDamage,
                    Sigma.primaryFire.pPerShot,
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
                  damageCalculationDPS(
                    Sigma.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Sigma.primaryFire.maxSplashDamage,
                    Sigma.primaryFire.pPerShot,
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
                data-tip={btnAbilityDescriptions.DH}
                onClick={() =>
                  damageCalculation(
                    Sigma.abilityTwo.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Sigma.abilityTwo.directHitDamage,
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
                    Sigma.abilityTwo.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Sigma.abilityTwo.minSplashDamage,
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
                    Sigma.abilityTwo.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Sigma.abilityTwo.maxSplashDamage,
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
                data-tip={btnAbilityDescriptions.X}
                onClick={() =>
                  damageCalculation(
                    'Melee',
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Sigma.melee,
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
export default SigmaPage;
