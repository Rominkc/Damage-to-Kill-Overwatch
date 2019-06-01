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
const RoadhogPage =(props)=>{
    const Roadhog = heroArray[19];
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
                    <h1 className='header-dmg2kOW'>{Roadhog.heroName}</h1>
                    <img src={Roadhog.picture} className='chosen-hero-img'  alt={Roadhog.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Roadhog.primaryFire.name} :</li>
                            <li>{Roadhog.secondaryFire.name} :</li>
                            <li>{Roadhog.abilityOne.name} : </li>
                            <li>{Roadhog.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculationDPS(Roadhog.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.primaryFire.minDamage,
                                    Roadhog.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMn
                                    </button>
                                <button onClick={()=>damageCalculationDPS(Roadhog.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.primaryFire.maxDamage,
                                    Roadhog.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Roadhog.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.secondaryFire.preDetonationDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    PreD
                                    </button>
                                <button onClick={()=>damageCalculationDPS(Roadhog.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.secondaryFire.minDamage,
                                    Roadhog.secondaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMn
                                    </button>
                                <button onClick={()=>damageCalculationDPS(Roadhog.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.secondaryFire.maxDamage,
                                    Roadhog.secondaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMx
                                    </button>
                            </li>    
                            <li>
                                <button onClick={()=>damageCalculation(Roadhog.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.abilityOne.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculationDPS(Roadhog.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.abilityThree.damage,
                                    Roadhog.abilityThree.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Roadhog.melee,
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
export default RoadhogPage;