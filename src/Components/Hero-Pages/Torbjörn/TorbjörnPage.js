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
import damageCalculationTorbUlt from '../../Damage-Calculations/damageCalculationTorbUlt';
//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const TorbjörnPage =(props)=>{
    const Torbjörn = heroArray[23];
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
                    <h1 className='header-dmg2kOW'>{Torbjörn.heroName}</h1>
                    <img src={Torbjörn.picture} className='chosen-hero-img'  alt={Torbjörn.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} canHeadShot={true}/>

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Torbjörn.primaryFire.name} :</li>
                            <li>{Torbjörn.secondaryFire.name} :</li>
                            <li>{Torbjörn.secondaryWeapon.name} :</li>
                            <li>{Torbjörn.abilityOne.name} : </li>
                            <li>{Torbjörn.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(Torbjörn.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Torbjörn.primaryFire.damage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPShMn}
                                onClick={()=>damageCalculationDPS(Torbjörn.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Torbjörn.secondaryFire.minDamage,
                                    Torbjörn.secondaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DPShMx} 
                                onClick={()=>damageCalculationDPS(Torbjörn.secondaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Torbjörn.secondaryFire.maxDamage,
                                    Torbjörn.secondaryFire.pPerShot,headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    DPSMx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(Torbjörn.secondaryWeapon.name,setAbilitySummary,setArmor,setHealth,armor,health,Torbjörn.secondaryWeapon.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>    
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS}
                                onClick={()=>damageCalculationDPS(Torbjörn.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Torbjörn.abilityOne.damage,
                                    Torbjörn.abilityOne.pPerShot,undefined,discordModifier,matrixAmp)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DPS} 
                                onClick={()=>damageCalculationTorbUlt(Torbjörn.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Torbjörn.abilityThree.damage,
                                    undefined,discordModifier)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                 onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Torbjörn.melee,
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
export default TorbjörnPage;