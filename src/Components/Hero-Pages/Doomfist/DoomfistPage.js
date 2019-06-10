import React from 'react'
import heroArray from '../../heroArray';
import damageCalculationDPS from '../../Damage-Calculations/damageCalculationDPS';
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
const DoomfistPage =(props)=>{
    const Doomfist = heroArray[5];
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
                    <h1 className='header-dmg2kOW'>{Doomfist.heroName}</h1>
                    <img src={Doomfist.picture} className='chosen-hero-img'  alt={Doomfist.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} canHeadShot={true}/>

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Doomfist.primaryFire.name} : </li>
                            <li>{Doomfist.secondaryFire.name} (Charge) : </li>
                            <li>{Doomfist.secondaryFire.name} (Impact) : </li>
                            <li>{Doomfist.abilityOne.name} : </li>
                            <li>{Doomfist.abilityTwo.name} : </li>
                            <li>{Doomfist.abilityThree.name} : </li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPShMn}
                                onClick={()=>damageCalculationDPS(Doomfist.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.primaryFire.minDamage,
                                    Doomfist.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DPShMx}
                                onClick={()=>damageCalculationDPS(Doomfist.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.primaryFire.maxDamage,
                                    Doomfist.primaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn} 
                                onClick={()=>damageCalculation(Doomfist.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.secondaryFire.minChargeDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(Doomfist.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.secondaryFire.maxChargeDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                 onClick={()=>damageCalculation(Doomfist.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.secondaryFire.minWallImpactDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(Doomfist.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.secondaryFire.maxWallImpactDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn} 
                                onClick={()=>damageCalculation(Doomfist.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.abilityOne.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(Doomfist.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.abilityOne.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(Doomfist.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.abilityTwo.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.Inr}
                                 onClick={()=>damageCalculation(Doomfist.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.abilityThree.innerRingDamage,
                                    undefined,discordModifier,nanoBoostAmp)}>
                                    Inr
                                    </button>
                                <button data-tip={btnAbilityDescriptions.OMn} 
                                onClick={()=>damageCalculation(Doomfist.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.abilityThree.minOuterRingDamage,
                                    undefined,discordModifier,nanoBoostAmp)}>
                                    OMn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.OMx} 
                                onClick={()=>damageCalculation(Doomfist.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.abilityThree.maxOuterRingDamage,
                                    undefined,discordModifier,nanoBoostAmp)}>
                                    OMx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Doomfist.melee,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
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
export default DoomfistPage;