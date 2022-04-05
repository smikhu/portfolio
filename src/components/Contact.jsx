import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'



function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-title">
                <h2>Contact</h2>
                <p>Want to get in contact with me for a good time? 😉</p>
                <p>Or maybe just to offer me a million dollar salary? That's alright too, I guess.. 😒</p>
            </div>
                <a className="socials-link" href="mailto: StevenMikhu@gmail.com"><p className="email socials-link">GMAIL<img className="social-icon" alt="gmail" src={gmail}></img></p></a>
            <div className="contact-title">
                <p>Check me out LinkedIn or GitHub!</p>
                <div className="social-icons">
                            <a className="socials-link socials" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/stevenmikhu">LINKEDIN<img className="social-icon" alt="linkedin" src={linkedin}></img></a>
                            <a className="socials-link socials" rel="noreferrer" target="_blank" href="https://github.com/smikhu">GITHUB<img className="social-icon" alt="github" src={github}></img></a>
                    </div>
            </div>
        </div>
    )
}

export default Contact;