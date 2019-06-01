import React from 'react'
import heroArray from '../../heroArray';
import damageCalculation from '../damageCalculation';
import KillHeroList from '../../KillHeroList';
import useHeroPageInfo from '../../useHeroPageInfo'
import AmplificationButtons from '../../AmplificationButtons';
import AbilitySummary from '../AbilitySummary';
import HeroPageKillHero from '../HeroPageKillHero';

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
                                <button onClick={()=>damageCalculation(Bastion.primaryFireRecon.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireRecon.minDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Bastion.primaryFireRecon.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireRecon.maxDamage,
                                    headShotModifier,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>  
                            <li>
                                <button onClick={()=>damageCalculation(Bastion.primaryFireSentry.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireSentry.minDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mn
                                    </button>
                                <button onClick={()=>damageCalculation(Bastion.primaryFireSentry.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.primaryFireSentry.maxDamage,
                                    undefined,discordModifier,nanoBoostAmp,matrixAmp,superchargerAmp,damageBoostAmp)}>
                                    Mx
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation(Bastion.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.abilityThree.directHitDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    DH
                                    </button>
                                <button onClick={()=>damageCalculation(Bastion.abilityThree.name,setAbilitySummary,setArmor,setHealth,armor,health,Bastion.abilityThree.splashDamage,
                                    undefined,discordModifier,nanoBoostAmp,superchargerAmp,damageBoostAmp,matrixAmp)}>
                                    S
                                    </button>
                            </li>
                            <li>
                                <button onClick={()=>damageCalculation('Melee',setAbilitySummary,setArmor,setHealth,armor,health,Bastion.melee,
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
                   
                
            </div>);

    
}
export default BastionPage;