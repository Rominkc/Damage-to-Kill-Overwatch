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
const ReinhardtPage =(props)=>{
    const Reinhardt = heroArray[18];
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
                    <h1 className='header-dmg2kOW'>{Reinhardt.heroName}</h1>
                    <img src={Reinhardt.picture} className='chosen-hero-img'  alt={Reinhardt.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Reinhardt.primaryFire.name} :</li>
                            <li>{Reinhardt.abilityOne.name} : </li>
                            <li>{Reinhardt.abilityTwo.name} :</li>
                            <li>{Reinhardt.abilityThree.name} :</li>
        
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(Reinhardt.primaryFire.name,setAbilitySummary,setArmor,setHealth,armor,health,Reinhardt.primaryFire.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    X
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.B}
                                onClick={()=>damageCalculation(Reinhardt.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Reinhardt.abilityOne.bumpDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    B
                                    </button>
                                <button data-tip={btnAbilityDescriptions.P}
                                onClick={()=>damageCalculation(Reinhardt.abilityOne.name,setAbilitySummary,setArmor,setHealth,armor,health,Reinhardt.abilityOne.pinDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp)}>
                                    P
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(Reinhardt.abilityTwo.name,setAbilitySummary,setArmor,setHealth,armor,health,Reinhardt.abilityTwo.damage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    X
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation(Reinhardt.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Reinhardt.abilityThree.damage,
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
export default ReinhardtPage;