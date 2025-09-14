import { useState, useEffect, useCallback } from 'react';

const BookIntro = ({ onComplete }) => {
    const [isBookOpened, setIsBookOpened] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const handleBookClick = useCallback(() => {
        setIsBookOpened(true);

        // After book opens, wait for animation then redirect to home
        setTimeout(() => {
            setIsHidden(true);

            // Call onComplete to hide book intro and go to home section
            setTimeout(() => {
                onComplete();
                // Scroll to home section
                setTimeout(() => {
                    const homeElement = document.getElementById('home');
                    if (homeElement) {
                        homeElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }, 500);
        }, 10000); // Wait 2 seconds after book opens
    }, [onComplete]);

    // Auto-open book after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            handleBookClick();
        }, 5000);

        return () => clearTimeout(timer);
    }, [handleBookClick]);

    return (
        <div className={`book-intro ${isHidden ? 'hidden' : ''}`}>
            <div className="book-container">
                <div className={`book ${isBookOpened ? 'opened' : ''}`}>
                    <div
                        className={`book-cover ${isBookOpened ? 'opened' : ''}`}
                        onClick={handleBookClick}
                    >
                        <h1 className="book-title">Nariman Adel</h1>
                        <p className="book-subtitle">Portfolio & Journey</p>
                    </div>

                    <div className="book-spine"></div>

                    <div className="book-pages">
                        <div className="page-content">
                            <div className="hello-greeting">
                                <h1 className="hello-title">Hello</h1>
                                <div className="vintage-line"></div>
                                <p className="hello-subtitle">Welcome to my world</p>
                            </div>

                            <div className="hello-intro">
                                <h2 className="page-hero-title">
                                    <span className="page-name-first">Nariman</span>
                                    <span className="page-name-last">Adel</span>
                                </h2>
                                <p className="page-hero-subtitle">Full-stack Developer & Creative Mind</p>

                                <div className="hello-message">
                                    <p className="vintage-text">
                                        I craft digital experiences that blend artistry with functionality.
                                        Let's create something beautiful together.
                                    </p>
                                </div>



                                <p className="page-loading-text">
                                    ✨ Opening the journey...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookIntro;
