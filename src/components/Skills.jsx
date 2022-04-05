import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import mongo from '../images/mongodb.png'
import node from '../images/nodeexpress.png'
import react from '../images/react.png'
import postgresql from '../images/postgresql.png'
import python from '../images/python.png'

function Skills() {
    return (
        <div className="skills-container" id="skills">
        
        <div className="skills-title">
                <h2>Skills</h2>
                <p>Trained with the League of Shadows and was personally mentored by Ra's Al Ghul. During my time training with the League of Shadows, I learned how to engage 600 reddit nerds at once and became truly invulnerable to trolls. Batman ain't got nothin' on my utility belt.</p>
            </div>

                <div className="skills-collection">

                    <div className="skills-left">

                        <p className="skills-images"><img className="skills" alt="html" src={html}></img> HTML </p>
                        <p className="skills-images"><img className="skills" alt="css" src={css}></img> CSS </p>

                    </div>

                    <div className="skills-left">

                        <p className="skills-images"><img className="skills" alt="javascript" src={javascript}></img> JavaScript </p>
                        <p className="skills-images"><img className="skills" alt="mongodb" src={mongo}></img> MongoDB </p>

                    </div>

                    <div className="skills-right">

                        <p className="skills-images"><img className="skills" alt="node" src={node}></img> NodeJS/Express </p>
                        <p className="skills-images"><img className="skills" alt="react" src={react}></img> React </p>

                    </div>

                    <div className="skills-right">

                        <p className="skills-images"><img className="skills" alt="postgresql" src={postgresql}></img> PostgreSQL </p>
                        <p className="skills-images"><img className="skills" alt="python" src={python}></img> Python </p>

                    </div>

                </div>
            
            

        </div>
    )
}

export default Skills;