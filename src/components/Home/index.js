import './index.scss'
import LogoTitle from '../../assets/images/logo-pic.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import profilePic from '../../assets/images/profile-pic.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ["I'", 'm', ' ', 'E', 'b', 'u', 'k', 'a']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _14`}>i,</span>
            <br />
            {/* <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> */}

            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            />
          </h1>
          <h2>Frontend Web Developer / Android App Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="pic-container">
          <img src={profilePic} alt="Ebuka's Picture" />
        </div>
        {/* <Logo /> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
