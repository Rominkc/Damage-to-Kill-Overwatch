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
const BastionPage =(props)=>{
    const Bastion = heroArray[3];
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
                    <h1 className='header-dmg2kOW'>{Bastion.heroName}</h1>
                    <img src={Bastion.picture} className='chosen-hero-img'  alt={Bastion.heroName}/>
                    
                    <AmplificationButtons setHeadShotModifier={setHeadShotModifier}
                    setDiscordModifier={setDiscordModifier} setNanoBoostAmp={setNanoBoostAmp} 
                    setMatrixAmp={setMatrixAmp} setSuperchargerAmp={setSuperchargerAmp} setDamageBoostAmp={setDamageBoostAmp} />

                    <div className="hero-abilities">
                        <ul className="hero-abilities-ul">
                            <li>{Bastion.primaryFireRecon.name} :</li>
                            <li>{Bastion.primaryFireSentry.name} : </li>
                            <li>{Bastion.abilityThree.name} :</li>
                            <li>Melee :</li>
                        </ul>
                        <ul className="hero-abilities-ul">
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn} 
                                onClick={()=>damageCalculation(Bastion.primaryFireRecon.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireRecon.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx} 
                                onClick={()=>damageCalculation(Bastion.primaryFireRecon.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireRecon.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button data-tip={btnAbilityDescriptions.Mn} 
                                onClick={()=>damageCalculation(Bastion.primaryFireSentry.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireSentry.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button data-tip={btnAbilityDescriptions.Mx}
                                 onClick={()=>damageCalculation(Bastion.primaryFireSentry.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireSentry.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.DH} 
                                onClick={()=>damageCalculation(Bastion.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.abilityThree.directHitDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DH
                                    </button>
                                <button data-tip={btnAbilityDescriptions.S} 
                                onClick={()=>damageCalculation(Bastion.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.abilityThree.splashDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    S
                                    </button>
                            </li>
                            <li>
                                <button data-tip={btnAbilityDescriptions.X}
                                onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Bastion.melee,
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
export default BastionPage;