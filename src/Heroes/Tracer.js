import TracerPic from '../Assets/Images/heroes/Tracer/Tracer.png';
import TracerIcon from '../Assets/Images/heroes/Tracer/Tracer-Icon.png';
const Tracer = {
        isUnique:true,
        heroName:'Tracer',
        icon: TracerIcon,
        picture:TracerPic,
        health:150,
        armor:0,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //	1.8 - 6 per bullet, 3.6 - 12 per shot (i.e two pistols: 1.8 * 2 = 3.6)
                        minDamage:3.6,
                        maxDamage:12,
                        pPerShot:2,
                        name:'Pulse Pistols'
                    },
        secondaryFire:{
                        doesDamage:false,
                        canHeadshot:false,
                        name:'N/A'
                    },
            // 'Lshift' ability
        abilityOne:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. 
                        //She stores up to three charges of the blink ability and generates more every few seconds.
                        name:'Blink'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.
                        name:'Recall'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on.
                        //After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.
                        stickDamage:5,
                        minDamage:60,
                        maxDamage:300,
                        name:'Pulse Bomb'
                    },
        melee:30,               
}
export default Tracer;