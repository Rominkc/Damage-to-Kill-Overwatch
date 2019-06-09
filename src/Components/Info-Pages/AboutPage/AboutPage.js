import React from 'react'
import './About.css'
const AboutPage =()=>{
    
    return(
    <div className="about-page">
    <section id='main-about'>
       <h1 className="about-general">About</h1>
       <div className="about-content">
           <h2>What is Damage to Kill Overwatch?</h2>
           <p>
            Overwatch is a fps (first person shooter) where players control one of several heroes in competitive 6-person team shooting matches. 
            From my personal experience, and in my opinion, in any competitive fps, to succeed at the game at the highest level, two traits a player must have are mechanical skill and game knowledge. 
            The purpose of this project is to help players expand their game knowledge by enabling players to see the damage capabilities of each hero in the game, 
            and test what abilities it would take to kill any other hero in the game. Knowledge of how much damage it takes to kill another hero is very important, 
            especially when playing a mechanically intensive hero such as “Genji” or “Widowmaker;”  this project hopes to share this knowledge with players 
            (who would normally have to figure out this information manually).
           </p>
       </div>
       <div className="about-content">
           <h2>Why did you make Damage to Kill Overwatch?</h2>
           <p>
           
           Have you ever been on the brink of killing someone, they live with a slither of health, and you ask yourself, "how did they not die?"
           Have you ever wanted to try a new hero, but opted not to because you didn't know what they were capable of? Have you ever just wondered
           how much damage Widowmaker's headshot would do if she had every damage boost in the game, and the target had Zenyatta orb?
           Damage to Kill Overwatch was made with these and other questions in mind.
           </p>
       </div> 
      
       <div className="about-content">
            <h1 className="about-general">Contact</h1>
            <p>If you would like to get in touch, please email me at grovelandinc@gmail.com</p>
       </div> 
    </section>
    </div>)
}

export default AboutPage;