import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDoT from '../../Damage-Calculations/damageCalculationDoT'
import damageCalculationDPS from '../../Damage-Calculations/damageCalculationDPS'
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip';//Custom react-tool-tip to give baseline style to all buttons

//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const AshePage =(props)=>{
    const Ashe = heroArray[1];
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
                    <h1 className='header-dmg2kOW'>{Ashe.heroName}</h1>
                    <img src={Ashe.picture} className='chosen-hero-img'  alt={Ashe.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} canHeadShot={true} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Ashe.primaryFireUnScoped.name} : </li>
                            <li>{Ashe.primaryFireScoped.name} : </li>
                            <li>{Ashe.abilityOne.name} : </li>
                            <li>{Ashe.abilityTwo.name} : </li>
                            <li>{Ashe.abilityThree.name} : </li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                onClick={()=>damageCalculation(Ashe.primaryFireUnScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Ashe.primaryFireUnScoped.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx} 
                                onClick={()=>damageCalculation(Ashe.primaryFireUnScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Ashe.primaryFireUnScoped.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn} 
                                onClick={()=>damageCalculation(Ashe.primaryFireScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Ashe.primaryFireScoped.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx} 
                                onClick={()=>damageCalculation(Ashe.primaryFireScoped.name,setAbilitySummary,setArmor,setHealth,armor,health,Ashe.primaryFireScoped.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                onClick={()=>damageCalculation(Ashe.abilityOne.name+'(Explosion)',setAbilitySummary,setArmor,setHealth,armor,health,Ashe.abilityOne.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(Ashe.abilityOne.name+'(Explosion)',setAbilitySummary,setArmor,setHealth,armor,health,Ashe.abilityOne.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mx
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DoT}
                                 onClick={()=>damageCalculationDoT(Ashe.abilityOne.name + '(Burn)',setAbilitySummary,setArmor,setHealth,armor,health,Ashe.abilityOne.burnDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DoT
                                    </button>
                                
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPSh}
                                onClick={()=>damageCalculationDPS(Ashe.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Ashe.abilityTwo.damage,
                                    Ashe.abilityTwo.pPerShot,undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.CD} 
                                onClick={()=>damageCalculation(Ashe.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Ashe.abilityThree.chargeDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    CD
                                    </button>
                                <button data-tip={btnAbilityDescriptions.ACD} 
                                onClick={()=>damageCalculation(Ashe.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Ashe.abilityThree.armCannonDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    ACD
                                    </button>

                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Ashe.melee,
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
export default AshePage;