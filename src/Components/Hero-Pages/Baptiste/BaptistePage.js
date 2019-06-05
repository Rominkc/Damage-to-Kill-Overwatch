import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip';//Custom react-tool-tip to give baseline style to all buttons

//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const BaptistePage =(props)=>{
    const Baptiste = heroArray[2];
// Create necessary state for the page
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
                    <h1 className='header-dmg2kOW'>{Baptiste.heroName}</h1>
                    <img src={Baptiste.picture} className='chosen-hero-img'  alt={Baptiste.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier} 
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Baptiste.primaryFire.name} :</li>
                           
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                onClick={()=>damageCalculation(Baptiste.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Baptiste.primaryFire.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx} 
                                onClick={()=>damageCalculation(Baptiste.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Baptiste.primaryFire.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                          
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Baptiste.melee,
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
export default BaptistePage;