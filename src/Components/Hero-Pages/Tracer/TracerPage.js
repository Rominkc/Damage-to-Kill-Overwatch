import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDPS from '../../Damage-Calculations/damageCalculationDPS';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip';//Custom react-tool-tip to give baseline style to all buttons
//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const TracerPage =(props)=>{
    const Tracer = heroArray[24];
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
                    <h1 className='header-dmg2kOW'>{Tracer.heroName}</h1>
                    <img src={Tracer.picture} className='chosen-hero-img'  alt={Tracer.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Tracer.primaryFire.name} :</li>
                            <li>{Tracer.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPShMn}
                                onClick={()=>damageCalculationDPS(Tracer.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Tracer.primaryFire.minDamage,
                                    Tracer.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DPShMx}
                                onClick={()=>damageCalculationDPS(Tracer.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Tracer.primaryFire.maxDamage,
                                    Tracer.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.Stick}
                                onClick={()=>damageCalculation(Tracer.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Tracer.abilityThree.stickDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Stick
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                onClick={()=>damageCalculation(Tracer.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Tracer.abilityThree.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(Tracer.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Tracer.abilityThree.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Tracer.melee,
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
export default TracerPage;