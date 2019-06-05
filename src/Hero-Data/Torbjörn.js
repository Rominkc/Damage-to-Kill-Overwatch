import TorbjörnPic from '../Assets/Images/heroes/Torbjörn/Torbjörn.png';
import TorbjörnIcon from '../Assets/Images/heroes/Torbjörn/Torbjörn-Icon.png';
const Torbjörn = {
        isUnique:true,
        heroName:'Torbjörn',
        icon: TorbjörnIcon,
        picture:TorbjörnPic,
        health:200,
        armor:50,
        primaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:false,
                        // fall off damage is assumed to be at the range where the fallout damage multiplier is fully active
                        // i.e if multiplier is .3 and is applied fully when the shot is taken from 40meters away then this is the range that is assumed
                        //Torbjörn fires rivets at long range.
                        damage:70,
                        name:'Rivet Gun(Long)'
                    },
        secondaryFire:{
                        doesDamage:true,
                        canHeadshot:true,
                        hasFallOffDamage:true,
                        //3.75 - 12.5 per pellet, 37.5 - 125 per shot
                        //Torbjörn ejects molten metal from his gun in a short, close-range burst.
                        minDamage:37.5,
                        maxDamage:125,
                        pPerShot:10,
                        name:'Rivet Gun(Short)'
                    },
            // 'Lshift' ability

        secondaryWeapon:{
                        doesDamage:true,
                        canHeadshot:false,
                        hasFallOffDamage:false,
                        //This multipurpose hammer repairs turrets and, in a pinch, can also be used as a weapon.
                        turretHealing:50,
                        damage:55,
                        name:'Forge Hammer'
        },
        abilityOne:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Torbjörn deploys a self-building turret which automatically tracks and attacks enemies.
                        //14 per round (56 per second) 4 per sec
                        damage:56,
                        pPerShot:4,
                        name:'Deploy Turret'
                    },
            // 'e' ability
        abilityTwo:{
                        doesDamage:false,
                        canHeadshot:false,
                        //Torbjörn gains additional armor as well as improved attack, movement, and reload speed for a brief period.
                        //+30% Rate of fire, +30% Move speed
                        name:'Overload'
                    },
            // 'q'|ultimate ability
        abilityThree:{
                        doesDamage:true,
                        canHeadshot:false,
                        //Torbjörn creates pools of molten slag that deal massive, sustained damage (plus bonus damage to armor), and can prevent enemies from moving through key locations.
                        //160 per second, 190 per second against armored enemies
                        damage:160,
                        name:'Molten Core'
                    },
        melee:30,               
}
export default Torbjörn;