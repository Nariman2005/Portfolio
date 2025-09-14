// Skills.jsx


const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML/CSS", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "React", level: 80 },
                { name: "Vue.js", level: 75 },
                { name: "TypeScript", level: 70 }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 75 },
                { name: "Express", level: 70 },
                { name: "Python", level: 65 },
                { name: "MongoDB", level: 60 }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", level: 85 },
                { name: "Figma", level: 80 },
                { name: "Webpack", level: 70 },
                { name: "AWS", level: 60 }
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