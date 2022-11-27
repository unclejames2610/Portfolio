import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import frontEndCertificate from '../../assets/pdfs/frontend-certificate.pdf'
import Loader from 'react-loaders'

const Certificates = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container webprojects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Certificate(s)'.split('')}
            idx={15}
          />
        </h1>

        <div className="flex-container">
          <Link
            to={frontEndCertificate}
            target="_blank"
            rel="noreferrer"
            className="certificate-container"
          >
            <p>Front-End Web Development Course Certificate from Udemy </p>
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Certificates
