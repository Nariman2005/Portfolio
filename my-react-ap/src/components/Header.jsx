// Header.jsx
import { useState } from 'react'


const Header = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(sectionId)
            setIsMenuOpen(false)
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo">

                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul>
                        <li>
                            <button
                                className={activeSection === 'home' ? 'active' : ''}
                                onClick={() => scrollToSection('home')}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={() => scrollToSection('about')}
                            >
                                About Me
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'skills' ? 'active' : ''}
                                onClick={() => scrollToSection('skills')}
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'projects' ? 'active' : ''}
                                onClick={() => scrollToSection('projects')}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'contact' ? 'active' : ''}
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header