import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../damageCalculation';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';

//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const AnaPage =(props)=>{
    const Ana = heroArray[16];
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
                    <h1 className='header-dmg2kOW'>{Ana.heroName}</h1>
                    <img src={Ana.picture} className='chosen-hero-img'  alt={Ana.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Ana.primaryFire.name} :</li>
                           
                            <li>{Ana.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculation(Ana.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Ana.primaryFire.directHitDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DH
                                    </button>
                                <button onClick={()=>damageCalculation(Ana.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Ana.primaryFire.minSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    SMn
                                    </button>
                                <button onClick={()=>damageCalculation(Ana.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Ana.primaryFire.maxSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    SMx
                                    </button>
                            </li>  
                          
                            <li>
                                <button onClick={()=>damageCalculation(Ana.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Ana.abilityThree.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mn
                                    </button>
                                 <button onClick={()=>damageCalculation(Ana.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Ana.abilityThree.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Ana.melee,
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
export default AnaPage;