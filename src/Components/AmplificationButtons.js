import React from 'react';
//Component renders amplification buttons which are common between all 'hero page' components
//Only thing that may differ is HeadshotMultiplier, if hero has no abilities that can headshot, input 1 as a paramater, else, you can leave out this attribute as it defaults to 2
// this is last argument, can be changed from two if necessary (headShotMultiplier)  *note widow is only hero that has 2.5x headshot
const AmplificationButtons = ({setHeadShotModifier,setDiscordModifier,setNanoBoostAmp,setMatrixAmp,setSuperchargerAmp,setDamageBoostAmp,headShotMultiplier = 2}) =>{
    const inputClassName='hidden';

    return(
        <ul className ="amplification-buttons">
            <li>
                <input className={inputClassName} type="checkbox" id='cb1' onChange={()=>setHeadShotModifier((prevHeadShotModifier)=>prevHeadShotModifier === 1 ? headShotMultiplier : 1)}/>
                <label htmlFor='cb1'>Headshot</label>
            </li>
            <li>
                <input className={inputClassName} type="checkbox" id='cb2'  onChange={()=>setDiscordModifier((prevDiscordModifier)=>prevDiscordModifier === 1 ? 1.25 : 1)} />
                <label htmlFor='cb2'>Discord</label>
            </li>
            <li>
                <input className={inputClassName} type="checkbox" id='cb3'   onChange={()=>setNanoBoostAmp((prevDiscordModifier)=>prevDiscordModifier === 0 ? .5 : 0)}/>
                <label htmlFor='cb3'>Nano Boost</label>
            </li>   
            <li>
                <input className={inputClassName} type="checkbox" id='cb4'  onChange={()=>setMatrixAmp((prevDiscordModifier)=>prevDiscordModifier === 0 ? 1 : 0)}/>
                <label htmlFor='cb4'>Amplification Matrix</label>  
            </li>
            <li>
                <input className={inputClassName} type="checkbox" id='cb5'  onChange={()=>setSuperchargerAmp((prevDiscordModifier)=>prevDiscordModifier === 0 ? .5 : 0)}/>
                <label htmlFor='cb5'>Supercharger</label>
            </li>
            <li>
                <input className={inputClassName} type="checkbox" id='cb6'  onChange={()=>setDamageBoostAmp((prevDiscordModifier)=>prevDiscordModifier === 0 ? .3 : 0)}/>
                <label htmlFor='cb6'> M. Damage Boost</label>
            </li>
        </ul>
    )
}

export default AmplificationButtons;