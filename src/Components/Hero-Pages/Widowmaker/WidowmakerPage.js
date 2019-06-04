import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDoT from '../../Damage-Calculations/damageCalculationDoT';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const WidowmakerPage =(props)=>{
    const Widowmaker = heroArray[25];
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
                    <h1 className='header-dmg2kOW'>{Widowmaker.heroName}</h1>
                    <img src={Widowmaker.picture} className='chosen-hero-img'  alt={Widowmaker.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Widowmaker.primaryFireScoped.name} :</li>
                            <li>{Widowmaker.primaryFireUnScoped.name} :</li>
                            <li>{Widowmaker.abilityTwo.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculation(Widowmaker.primaryFireScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Widowmaker.primaryFireScoped.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Widowmaker.primaryFireScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Widowmaker.primaryFireScoped.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Widowmaker.primaryFireUnScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Widowmaker.primaryFireUnScoped.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Widowmaker.primaryFireUnScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Widowmaker.primaryFireUnScoped.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                              
                            
                            <li>
                                <button onClick={()=>damageCalculationDoT(Widowmaker.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Widowmaker.abilityTwo.damagePerSecond,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                                <button onClick={()=>damageCalculationDoT(Widowmaker.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Widowmaker.abilityTwo.damageOverTime,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DoT
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Widowmaker.melee,
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
export default WidowmakerPage;