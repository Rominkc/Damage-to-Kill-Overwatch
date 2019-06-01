import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../damageCalculation';
import damageCalculationDPS from '../damageCalculationDPS';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';

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
                                <button onClick={()=>damageCalculationDPS(Symmetra.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.primaryFire.levelOneDamage,
                                    Symmetra.primaryFire.pPerSecond,undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculationDPS(Symmetra.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.primaryFire.levelTwoDamage,
                                    Symmetra.primaryFire.pPerSecond,undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculationDPS(Symmetra.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.primaryFire.levelThreeDamage,
                                    Symmetra.primaryFire.pPerSecond,undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Symmetra.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.secondaryFire.directHitDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DH
                                    </button>
                                <button onClick={()=>damageCalculation(Symmetra.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.secondaryFire.minSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    SMn
                                    </button>
                                <button onClick={()=>damageCalculation(Symmetra.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.secondaryFire.maxSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    SMx
                                    </button>
                            </li>   
                            <li>
                                <button onClick={()=>damageCalculationDPS(Symmetra.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.abilityOne.damage,
                                    Symmetra.abilityOne.pPerSecond,undefined,discordModifier)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Symmetra.melee,
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
                   
                
            </div>);

    
}
export default SymmetraPage;