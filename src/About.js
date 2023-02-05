import React, {useState} from 'react'
import "./About.css"


const About = () => {
    const [info,setInfo] = useState("")    

    const displayInfo= e => {
        setInfo("My dream is to work together with a team who share the same passion and desire for software as i do. This is why SovTech stood out for me. I understand that i have a lot to learn but i am ready for the challenge to grow my skills.")
    }
    return(
        <div className='aboutdiv'>
            <h3 className="about">About Me</h3>
            <ul className='passions'>

            <li>Aspiring software engineer</li>
            <li>I am 19 years old</li> 
            <li> I enjoy playing golf, soccer and padel</li>
            <li>Currently learning how to play chess</li>
            <li>My main goal now is to challenge myself in order to grow my skills in the IT world</li>

            </ul>
            <button onClick={displayInfo} className="button"> Why SovTech?</button>
            <p>{info}</p>
    
         
         </div>
    )
}

export default About