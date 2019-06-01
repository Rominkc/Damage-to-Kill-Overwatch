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
const WreckingballPage =(props)=>{
    const Wreckingball = heroArray[27];
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
                    <h1 className='header-dmg2kOW'>{Wreckingball.heroName}</h1>
                    <img src={Wreckingball.picture} className='chosen-hero-img'  alt={Wreckingball.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Wreckingball.primaryFire.name} :</li>
                            <li>{Wreckingball.secondaryFire.name} :</li>
                            <li>{Wreckingball.abilityOne.name} : </li>
                            <li>{Wreckingball.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculation(Wreckingball.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Wreckingball.primaryFire.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Wreckingball.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Wreckingball.primaryFire.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Wreckingball.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Wreckingball.secondaryFire.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>  
                            <li>
                                <button onClick={()=>damageCalculation(Wreckingball.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Wreckingball.abilityOne.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Wreckingball.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Wreckingball.abilityOne.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Wreckingball.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Wreckingball.abilityThree.damage,
                                    undefined,discordModifier)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Wreckingball.melee,
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
export default WreckingballPage;