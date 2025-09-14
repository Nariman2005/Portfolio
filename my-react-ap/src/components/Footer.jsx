function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        © 2025 Nariman Adel. Built with React.
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/yourusername" className="footer-link">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" className="footer-link">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:your.email@example.com" className="footer-link">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;