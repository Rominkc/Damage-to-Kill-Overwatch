import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';


//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const BrigittePage =(props)=>{
    const Brigitte = heroArray[4];
// Create necessary state for the page
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
                    <h1 className='header-dmg2kOW'>{Brigitte.heroName}</h1>
                    <img src={Brigitte.picture} className='chosen-hero-img'  alt={Brigitte.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier} headShotMultiplier={1}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Brigitte.primaryFire.name} :</li>
                            <li>{Brigitte.secondaryFire.name} : </li>
                            <li>{Brigitte.abilityTwo.name} :</li>
                            
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button onClick={()=>damageCalculation(Brigitte.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Brigitte.primaryFire.damage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>  
                            <li>
                                <button onClick={()=>damageCalculation(Brigitte.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Brigitte.secondaryFire.damage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Brigitte.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Brigitte.abilityTwo.damage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                        {/*Melee Does the same damage as rocket flail so it was excluded */}
                        </ul>
                    </div> 
                </div>
                <HeroPageKillHero killHero={killHero} health={health} armor={armor} />
                <AbilitySummary abilitySummary={abilitySummary}/>
                <KillHeroList setKillHero={setKillHero} setHealth={setHealth} setArmor={setArmor} setAbilitySummary={setAbilitySummary}/>
   
                
            </div>);

    
}
export default BrigittePage;