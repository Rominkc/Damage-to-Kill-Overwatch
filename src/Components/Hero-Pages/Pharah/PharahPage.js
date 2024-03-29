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
const PharahPage = props => {
  const Pharah = heroArray[16];
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
        <h1 className='header-dmg2kOW'>{Pharah.heroName}</h1>
        <img
          src={Pharah.picture}
          className='chosen-hero-img'
          alt={Pharah.heroName}
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
            <li>{Pharah.primaryFire.name} :</li>

            <li>{Pharah.abilityThree.name} :</li>
            <li>Melee :</li>
          </ul>
          <ul className='hero-abilities-ul'>
            <li>
              <button
                data-tip={btnAbilityDescriptions.DH}
                onClick={() =>
                  damageCalculation(
                    Pharah.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Pharah.primaryFire.directHitDamage,
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
                    Pharah.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Pharah.primaryFire.minSplashDamage,
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
                    Pharah.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Pharah.primaryFire.maxSplashDamage,
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
                    Pharah.abilityThree.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Pharah.abilityThree.minDamage,
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
                    Pharah.abilityThree.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Pharah.abilityThree.maxDamage,
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
                    'Melee',
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Pharah.melee,
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
export default PharahPage;
