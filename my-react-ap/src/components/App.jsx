// App.jsx
import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import AboutSection from './AboutSection'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import BookIntro from './BookIntro'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showBookIntro, setShowBookIntro] = useState(true)

  console.log('App state:', { showBookIntro, activeSection });

  const handleBookIntroComplete = () => {
    console.log('Book intro completed');
    setShowBookIntro(false)
  }

  return (
    <div className="App">
      {showBookIntro && <BookIntro onComplete={handleBookIntroComplete} />}

      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home setActiveSection={setActiveSection} />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App