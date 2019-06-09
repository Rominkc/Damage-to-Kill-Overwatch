import React from 'react'
import './FAQ.css'
const FAQPage =()=>{
    return(
    <div className="faq-page">
        <div id='main-faq'>
            <h1 className="faq-general">F.A.Q</h1>
            <div className="faq-content">
                <h3>Where was the information of hero’s abilities gathered from?</h3>
                <p>
                Information on hero abilities as well as information on how each damage amplifier is applied to damage was gathered from a combination of in game testing, 
                data from <a href="https://overwatch.gamepedia.com">overwatch.gamepedia</a>, 
                and data from <a href="https://overwatch.fandom.com/wiki/Overwatch_Wiki">overwatch.fandom</a>
                </p>
            </div>
            <div className="faq-content">
                <h3>What is the damage calculation formula?</h3>
                <p>
                If all damage amplifications applied the formula would be (1 + (0.5 + 0.5 + 0.3 + 1)) * 1.25 = 4.125 * (2 or 2.5) = 8.25 or 10.3125 
                (the last 2 or 2.5 depends on if the ability is Widowmaker’s scoped headshot, or a regular headshot).
                </p>
            </div> 
            <div className="faq-content">
                <h3>How do damage amplifiers affect hero abilities when some of the abilities are unaffected by these amplifiers?</h3>
                <p>
                Each ability’s damage calculation can be thought of as “independent.” What this means is that even if a damage amplifier is active, 
                if the ability is unaffected by that modifier, it will not be applied to the ability’s damage calculation. 
                For example, if you had the headshot modifier active, and you tried to test it with Ana’s primary fire, no damage amplification would be added to the ability, 
                and it would do its normal amount of damage.
                </p>
            </div> 
            <div className="faq-content">
                <h3>How does armor affect the damage calculations?</h3>
                <p>
                Armor affects the damage calculation in different ways depending on the ability. 
                For abilities that do damage less than 6 it halves the damage. Abilities that do 6 or more damage do 3 less damage. 
                Abilities that do damage over time are unaffected by armor. Beam type abilities do 20% less damage against armor. 
                Lastly, Torbjörn’s ultimate ability does 1.1875 increased damage against armor calculated by 190/130, 
                as he does 190 damage per second against armor until the target has no armor.
                </p>
            </div> 
            <div className="faq-content">
                <h3>How are abilities that do multiple instances of damage affected by armor?</h3>
                <p>
                In the case of abilities with multiple instances of damage, each instance of damage is taken into account when deciding how armor will affect it, 
                rather than the damage as a whole. For example, at close range Reaper’s primary fire does 7 damage per bullet and each shot he shoots 20 bullets. 
                Depending on how much armor the target has, each individual bullet would be tested on whether it should be reduced by 3 or do the normal 7 damage 
                (Note: Each calculation assumes that all the instances of damage connected with the target, which may vary in game).
                </p>
            </div> 
            <div className="faq-content">
                <h3>What is the difference between min damage and max damage?</h3>
                <p>
                Some abilities in overwatch do more or less damage depending on how far the target is.
                Max damage assumes that the target is in the closest possible range before the ability’s damage begins to fall off, 
                and min damage assumes that the target is the furthest away they can be while still in range of the ability. 
                For example, for Reaper’s primary fire he would do max damage if the target was within 9 meters of him, 
                and he would do min damage if the target was 20 meters away from him.
                </p>
            </div> 
            <div className="faq-content">
                <h3>What abilities are classified as “damage over time?”</h3>
                <ul>
                    <li>Ana: Primary Fire</li> 
                    <li>Ashe: Dynamite</li> 
                    <li>Hanzo: Dragonstrike</li> 
                    <li>Mei: Blizzard</li> 
                    <li>Moira: Biotic Orb</li> 
                    <li>Widowmaker: Venom Mine</li> 
                    <li>Zarya: Graviton Surge</li> 
                </ul>
            </div>
            <div className="faq-content">
                <h3>What abilities are classified as “beam type?”</h3>
                <ul>
                    <li>Mei: Primary Fire</li> 
                    <li>Moira: Alternate Fire, Coalescence</li> 
                    <li>Symmetra: Primary Fire, Sentry Turret</li> 
                    <li>Winston: Primary Fire</li> 
                    <li>Zarya: Primary Fire</li> 
                </ul>
            </div>  
        </div>
    </div>
    )
}

export default FAQPage;