// Projects.jsx


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "PreGame Testing Platform",
            description: "This is a Java web application for game testing that uses JSP for the frontend, MySQL for data storage, and provides user authentication.",
            image: `${import.meta.env.BASE_URL}pregame-screenshot.png`, // Vite way
            technologies: ["Java", "JSP", "MySQL", "Maven", "Apache Tomcat", "HTML", "CSS", "JavaScript"],
            liveUrl: "#",
            githubUrl: "https://github.com/Nariman2005/PreGame"
        },
        {
            id: 2,
            title: "The Cairo Times",
            description: "A modern Android news application delivering real-time NY Times articles with Jetpack Compose UI, advanced search, category filtering, and seamless web integration.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
            technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "OkHttp", "NY Times API", "Material Design 3", "Navigation Component","StateFlow", "Gradle"],
            liveUrl: "#",
            githubUrl: "https://github.com/Nariman2005/The-Cairo-Times"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A weather application that displays current and forecasted weather conditions for any location.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1165&q=80",
            technologies: ["JavaScript", "OpenWeather API", "HTML5", "CSS3"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onError={(e) => {
                                        console.log('Image failed to load:', project.image);
                                        e.target.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                                    }}
                                    onLoad={() => console.log('Image loaded successfully:', project.image)}
                                />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects