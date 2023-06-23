import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import projectPic from '../../assets/images/portfolio-project-pic.jpg'
import certificatePic from '../../assets/images/portfolio-certificate-pic.png'
import transcriptPic from '../../assets/images/portfolio-transcript-pic.jpg'
import cvPic from '../../assets/images/portfolio-cv-pic.jpg'
import resume from '../../assets/pdfs/resume.pdf'
import transcript from '../../assets/pdfs/transcript.pdf'
import Loader from 'react-loaders'

const File = () => {
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
            strArray={'Files'.split('')}
            idx={15}
          />
        </h1>

        <div className="flex-container">
          <div className="projects-box">
            <Link to="/projects">
              <img src={projectPic} loading="lazy" alt="project" />
              <span>Projects</span>
            </Link>
          </div>

          <div className="cv-box">
            <Link to={resume} target="_blank" rel="noreferrer">
              <img src={cvPic} loading="lazy" alt="cv" />
              <span>CV</span>
            </Link>
          </div>
          <div className="certificates-box">
            <Link to="/certificates">
              <img src={certificatePic} loading="lazy" alt="certificate" />
              <span>Certificate(s)</span>
            </Link>
          </div>
          <div className="transcript-box">
            <Link to={transcript} target="_blank" rel="noreferrer">
              <img src={transcriptPic} loading="lazy" alt="transcript" />
              <span>Transcript</span>
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default File
