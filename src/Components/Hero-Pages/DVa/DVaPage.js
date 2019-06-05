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
const DVaPage =(props)=>{
    const DVa = heroArray[6];
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
                    <h1 className='header-dmg2kOW'>{DVa.heroName}</h1>
                    <img src={DVa.picture} className='chosen-hero-img'  alt={DVa.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{DVa.primaryFire.name} :</li>
                            <li>{DVa.abilityOne.name} : </li>
                            <li>{DVa.abilityTwo.name} :</li>
                            <li>{DVa.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                 onClick={()=>damageCalculation(DVa.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.primaryFire.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(DVa.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.primaryFire.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(DVa.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.abilityOne.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DH} 
                                onClick={()=>damageCalculation(DVa.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.abilityTwo.directHitDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DH
                                    </button>
                                <button data-tip={btnAbilityDescriptions.SMn}
                                onClick={()=>damageCalculation(DVa.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.abilityTwo.minSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    SMn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.SMx}
                                onClick={()=>damageCalculation(DVa.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.abilityTwo.maxSplashDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    SMx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn}
                                onClick={()=>damageCalculation(DVa.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.abilityThree.minDamage,
                                    undefined,discordModifier)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                onClick={()=>damageCalculation(DVa.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,DVa.abilityThree.maxDamage,
                                    undefined,discordModifier)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,DVa.melee,
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
export default DVaPage;