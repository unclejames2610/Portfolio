import {
  faAndroid,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Chukwuebuka Jedidiah James Udeala is a FrontEnd Web and Android App
            Developer, who specializes in ReactJs for web development and Kotlin
            for app development. He graduated with a first class in Computer
            Engineering from Covenant University in August 2022.
          </p>
          <p>
            He was introduced to web development in 2015 when he participated in
            a competition organized by NITDA and finished in 4th place. He
            started developing Android apps in 2021 while he was on Industrial
            Training (IT). Now, he uses ReactJs which is a component-based
            JavaScript library.
          </p>
          <p>
            Chukwuebuka (Ebuka for short) is a fast-learner, who is ready to
            adapt to different techniques to help maximize productivity and
            customer satisfaction. He works well in a team and can also perform
            his tasks alone when required. Ebuka is familiar with HTML, CSS,
            Sass, ReactJS, JavaScript, JQuery, Styled Components, Kotlin, C/C++,
            Arduino, ASM (Assembly Language) and VHDL.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAndroid} color="#3ddc84" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#cc6699" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
