import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDPS from '../../Damage-Calculations/damageCalculationDPS';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip';//Custom react-tool-tip to give baseline style to all buttons
//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const ReaperPage =(props)=>{
    const Reaper = heroArray[17];
// Create necessary state for the page 
// eslint-disable-next-line
    const [headShotModifier,setHeadShotModifier,
        discordModifier,setDiscordModifier,
        nanoBoostAmp,setNanoBoostAmp,
        matrixAmp,setMatrixAmp,
        superchargerAmp,setSuperchargerAmp,
        damageBoostAmp,setDamageBoostAmp,
        killHero,setKillHero,
        health,setHealth,
        armor,setArmor,
        abilitySummary,setAbilitySummary] = useHeroPageInfo();
  
    return(
            <div className='hero-page-container'>
                <div className='hero-page-selected-hero'>
                    <h1 className='header-dmg2kOW'>{Reaper.heroName}</h1>
                    <img src={Reaper.picture} className='chosen-hero-img'  alt={Reaper.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Reaper.primaryFire.name} :</li>
                           
                            <li>{Reaper.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPShMn}
                                onClick={()=>damageCalculationDPS(Reaper.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Reaper.primaryFire.minDamage,
                                    Reaper.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DPShMx}
                                onClick={()=>damageCalculationDPS(Reaper.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Reaper.primaryFire.maxDamage,
                                    Reaper.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS}
                                onClick={()=>damageCalculationDPS(Reaper.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Reaper.abilityThree.damage,
                                    Reaper.abilityThree.pPerSecond,undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Reaper.melee,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                        </ul>
                    </div> 
                </div>
                <HeroPageKillHero killHero={killHero} health={health} armor={armor} />
                <AbilitySummary abilitySummary={abilitySummary}/>
                <KillHeroList setKillHero={setKillHero} setHealth={setHealth} setArmor={setArmor} setAbilitySummary={setAbilitySummary}/>
                <BtnReactToolTip/>
                
            </div>);

    
}
export default ReaperPage;