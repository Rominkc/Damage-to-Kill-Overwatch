import {useState} from 'react';
import MysteryHero from '../Heroes/MysteryHero';
//Custom hook which creates state hooks for a 'hero page'
//Created mainly to export some of the code complexity from each 'hero page'
const useHeroPageInfo = () =>{
    const [headShotModifier,setHeadShotModifier] = useState(1);
    const [discordModifier,setDiscordModifier] = useState(1);
    const [nanoBoostAmp,setNanoBoostAmp] = useState(0);
    const [matrixAmp,setMatrixAmp] = useState(0);
    const [superchargerAmp,setSuperchargerAmp] = useState(0);
    const [damageBoostAmp,setDamageBoostAmp] = useState(0);
    const [killHero,setKillHero]= useState(MysteryHero);
    const [health,setHealth]= useState(MysteryHero.health);
    const [armor,setArmor]= useState(MysteryHero.armor);
    const [abilitySummary,setAbilitySummary] = useState('');

    return[headShotModifier,setHeadShotModifier,
            discordModifier,setDiscordModifier,
            nanoBoostAmp,setNanoBoostAmp,
            matrixAmp,setMatrixAmp,
            superchargerAmp,setSuperchargerAmp,
            damageBoostAmp,setDamageBoostAmp,
            killHero,setKillHero,
            health,setHealth,
            armor,setArmor,
            abilitySummary,setAbilitySummary]
}

export default useHeroPageInfo;