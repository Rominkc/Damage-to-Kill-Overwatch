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
const WinstonPage =(props)=>{
    const Winston = heroArray[26];
// Create necessary state for the page 
// eslint-disable-next-line
    const [headShotModifier,setHeadShotModifier,
        discordModifier,setDiscordModifier,
        nanoBoostAmp,setNanoBoostAmp,// eslint-disable-next-line
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
                    <h1 className='header-dmg2kOW'>{Winston.heroName}</h1>
                    <img src={Winston.picture} className='chosen-hero-img'  alt={Winston.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Winston.primaryFire.name} :</li>
                            <li>{Winston.abilityOne.name} : </li>
                            <li>{Winston.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculationDPS(Winston.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Winston.primaryFire.damage,
                                    Winston.primaryFire.pPerSecond,undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    DPS
                                    </button>
                            </li>  
                            <li>
                                <button onClick={()=>damageCalculation(Winston.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Winston.abilityOne.jumpDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Jump
                                    </button>
                                <button onClick={()=>damageCalculation(Winston.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Winston.abilityOne.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Winston.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Winston.abilityOne.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Winston.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Winston.abilityThree.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Winston.melee,
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
export default WinstonPage;