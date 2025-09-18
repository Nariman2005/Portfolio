// Skills.jsx


const Skills = () => {
    const skillCategories = [
        {
            "title": "Frontend",
            "skills": [
                { "name": "HTML/CSS", "level": 85 },
                { "name": "JavaScript", "level": 85 },
                { "name": "React", "level": 80 }
            ]
        },
        {
            "title": "Backend",
            "skills": [
                { "name": "C#", "level": 80 },
                { "name": "ASP.NET", "level": 75 },
                { "name": "Entity Framework", "level": 70 },
                { "name": "SQL Server", "level": 75 },
                { "name": "Java", "level": 65 }
            ]
        },
        {
            "title": "Tools & Technologies",
            "skills": [
                { "name": "Git/GitHub", "level": 85 },
                { "name": "Visual Studio", "level": 80 },
                { "name": "Figma", "level": 75 },
                { "name": "Jira", "level": 70 },
                { "name": "AWS S3", "level": 65 }
            ]
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills