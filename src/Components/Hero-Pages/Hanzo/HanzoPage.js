import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../../Damage-Calculations/damageCalculation';
import damageCalculationDoT from '../../Damage-Calculations/damageCalculationDoT';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';
import btnAbilityDescriptions from '../btnAbilityDescriptions';
import BtnReactToolTip from '../BtnReactToolTip';//Custom react-tool-tip to give baseline style to all buttons

//CSS for this component is the basis for all other css for page components
//damageCalculation function takes in all state to calculate the new state
const HanzoPage =(props)=>{
    const Hanzo = heroArray[8];
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
                    <h1 className='header-dmg2kOW'>{Hanzo.heroName}</h1>
                    <img src={Hanzo.picture} className='chosen-hero-img'  alt={Hanzo.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} canHeadShot={true}/>

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Hanzo.primaryFire.name} :</li>
                            <li>{Hanzo.abilityOne.name} : </li>
                            <li>{Hanzo.abilityTwo.name} :</li>
                            <li>{Hanzo.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                onClick={()=>damageCalculation(Hanzo.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.primaryFire.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(Hanzo.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.primaryFire.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                onClick={()=>damageCalculation(Hanzo.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityOne.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(Hanzo.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityOne.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(Hanzo.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityTwo.damage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.Arw}
                                onClick={()=>damageCalculation(Hanzo.abilityThree.name+'(Arrow)',setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityThree.arrowDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    Arw
                                    </button>
                                <button data-tip={btnAbilityDescriptions.DPS}
                                onClick={()=>damageCalculationDoT(Hanzo.abilityThree.name+'(Dragon)',setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.abilityThree.dragonDamage,
                                    undefined,discordModifier)}>
                                    DPS
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Hanzo.melee,
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
export default HanzoPage;