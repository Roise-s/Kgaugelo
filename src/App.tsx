import './App.css'
import Footer from './pages/Footer.tsx'
import LoginPage from './pages/Main.tsx'
import Navbar from './pages/Navbar.tsx'
import Projects from './pages/Projects.tsx'
import ProjectsTt from './pages/ProjectsTt.tsx'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <LoginPage />
        <ProjectsTt />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
