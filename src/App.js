import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import File from './components/File'
import Certificates from './components/Certificates'
import WebProjects from './components/WebProjects'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="file" element={<File />} />
            <Route path="projects" element={<WebProjects />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="dashboard-private" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
