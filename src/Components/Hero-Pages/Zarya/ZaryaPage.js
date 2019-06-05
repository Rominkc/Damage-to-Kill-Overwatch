import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDoT from '../../Damage-Calculations/damageCalculationDoT';
import damageCalculationBTD from '../../Damage-Calculations/damageCalculationBTD';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip';//Custom react-tool-tip to give baseline style to all buttons


//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const ZaryaPage =(props)=>{
    const Zarya = heroArray[28];
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
                    <h1 className='header-dmg2kOW'>{Zarya.heroName}</h1>
                    <img src={Zarya.picture} className='chosen-hero-img'  alt={Zarya.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Zarya.primaryFire.name} :</li>
                            <li>{Zarya.secondaryFire.name} :</li>
                            <li>{Zarya.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS} 
                                onClick={()=>damageCalculationBTD(Zarya.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Zarya.primaryFire.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                 onClick={()=>damageCalculation(Zarya.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Zarya.secondaryFire.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx} 
                                onClick={()=>damageCalculation(Zarya.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Zarya.secondaryFire.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.Imp} 
                                onClick={()=>damageCalculation(Zarya.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Zarya.abilityThree.impactDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Imp
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DPS} 
                                onClick={()=>damageCalculationDoT(Zarya.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Zarya.abilityThree.damagePerSecond,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DPS
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DoT} 
                                onClick={()=>damageCalculationDoT(Zarya.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Zarya.abilityThree.damageOverTime,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DoT
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Zarya.melee,
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
export default ZaryaPage;