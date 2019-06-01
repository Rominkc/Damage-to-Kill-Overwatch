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
const McCreePage =(props)=>{
    const McCree = heroArray[11];
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
                    <h1 className='header-dmg2kOW'>{McCree.heroName}</h1>
                    <img src={McCree.picture} className='chosen-hero-img'  alt={McCree.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{McCree.primaryFire.name} :</li>
                            <li>{McCree.secondaryFire.name} : </li>
                            <li>{McCree.abilityTwo.name} :</li>
                            <li>{McCree.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculation(McCree.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.primaryFire.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(McCree.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.primaryFire.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li> 
                            <li>
                                <button onClick={()=>damageCalculation(McCree.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.secondaryFire.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(McCree.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.secondaryFire.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button onClick={()=>damageCalculation(McCree.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.abilityTwo.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(McCree.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.abilityThree.oneSecDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    1s
                                    </button>
                                <button onClick={()=>damageCalculation(McCree.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.abilityThree.twoSecDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    2s
                                    </button>
                                <button onClick={()=>damageCalculation(McCree.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,McCree.abilityThree.threeSecDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    3s
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,McCree.melee,
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
export default McCreePage;