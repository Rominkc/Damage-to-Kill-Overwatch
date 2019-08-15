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
const GenjiPage = props => {
  const Genji = heroArray[7];
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
        <h1 className='header-dmg2kOW'>{Genji.heroName}</h1>
        <img
          src={Genji.picture}
          className='chosen-hero-img'
          alt={Genji.heroName}
        />

        <AmplificationButtons
          setHeadShotModifier={setHeadShotModifier}
          setDiscordModifier={setDiscordModifier}
          setNanoBoostAmp={setNanoBoostAmp}
          setMatrixAmp={setMatrixAmp}
          setSuperchargerAmp={setSuperchargerAmp}
          setDamageBoostAmp={setDamageBoostAmp}
          canHeadShot={true}
        />

        <div className='hero-abilities'>
          <ul className='hero-abilities-ul'>
            <li>{Genji.primaryFire.name} :</li>
            <li>{Genji.secondaryFire.name} :</li>
            <li>{Genji.abilityOne.name} : </li>
            <li>{Genji.abilityThree.name} :</li>
            <li>Melee :</li>
          </ul>
          <ul className='hero-abilities-ul'>
            <li>
              <button
                data-tip={btnAbilityDescriptions.X}
                onClick={() =>
                  damageCalculation(
                    Genji.primaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Genji.primaryFire.damage,
                    headShotModifier,
                    discordModifier,
                    nanoBoostAmp,
                    matrixAmp,
                    superchargerAmp,
                    damageBoostAmp
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
                    Genji.secondaryFire.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Genji.secondaryFire.damage,
                    headShotModifier,
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
                    Genji.abilityOne.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Genji.abilityOne.damage,
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
            <li>
              <button
                data-tip={btnAbilityDescriptions.X}
                onClick={() =>
                  damageCalculation(
                    Genji.abilityThree.name,
                    setAbilitySummary,
                    setArmor,
                    setHealth,
                    armor,
                    health,
                    Genji.abilityThree.damage,
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
                    Genji.melee,
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
export default GenjiPage;
