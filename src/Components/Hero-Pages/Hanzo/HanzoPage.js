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
const HanzoPage =(props)=>{
    const Hanzo = heroArray[8];
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
                    <h1 className='header-dmg2kOW'>{Hanzo.heroName}</h1>
                    <img src={Hanzo.picture} className='chosen-hero-img'  alt={Hanzo.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Hanzo.primaryFire.name} :</li>
                            <li>{Hanzo.abilityOne.name} : </li>
                            <li>{Hanzo.abilityTwo.name} :</li>
                            <li>{Hanzo.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculation(Hanzo.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.primaryFire.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Hanzo.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.primaryFire.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button onClick={()=>damageCalculation(Hanzo.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityOne.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Hanzo.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityOne.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Hanzo.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityTwo.damage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Hanzo.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityThree.arrowDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    A
                                    </button>
                                <button onClick={()=>damageCalculation(Hanzo.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityThree.dragonDamage,
                                    undefined,discordModifier)}>
                                    D
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.melee,
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
export default HanzoPage;