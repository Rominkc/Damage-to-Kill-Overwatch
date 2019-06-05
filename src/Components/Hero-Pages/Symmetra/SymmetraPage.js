import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
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
const SymmetraPage =(props)=>{
    const Symmetra = heroArray[22];
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
                    <h1 className='header-dmg2kOW'>{Symmetra.heroName}</h1>
                    <img src={Symmetra.picture} className='chosen-hero-img'  alt={Symmetra.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Symmetra.primaryFire.name} Lvl 1 :</li>
                            <li>{Symmetra.primaryFire.name} Lvl 2 :</li>
                            <li>{Symmetra.primaryFire.name} Lvl 3 :</li>
                            <li>{Symmetra.secondaryFire.name} :</li>
                            <li>{Symmetra.abilityOne.name} : </li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS} 
                                onClick={()=>damageCalculationBTD(Symmetra.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.primaryFire.levelOneDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS}
                                onClick={()=>damageCalculationBTD(Symmetra.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.primaryFire.levelTwoDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS} 
                                onClick={()=>damageCalculationBTD(Symmetra.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.primaryFire.levelThreeDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DH} 
                                onClick={()=>damageCalculation(Symmetra.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.secondaryFire.directHitDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DH
                                    </button>
                                <button data-tip={btnAbilityDescriptions.SMn} 
                                onClick={()=>damageCalculation(Symmetra.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.secondaryFire.minSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    SMn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.SMx} 
                                onClick={()=>damageCalculation(Symmetra.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.secondaryFire.maxSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    SMx
                                    </button>
                            </li>   
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS} 
                                onClick={()=>damageCalculationBTD(Symmetra.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.abilityOne.damage,
                                    undefined,discordModifier)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.melee,
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
export default SymmetraPage;