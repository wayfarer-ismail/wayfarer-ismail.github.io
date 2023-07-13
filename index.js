import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to My Portfolio</h1>
                    <p>I'm a passionate web developer.</p>
                    <a href="#" className="btn">View Projects</a>
                </div>
            </section>

            <section className="about">
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>I have several years of experience in web development...</p>
                </div>
            </section>

            <section className="projects">
                <div className="projects-content">
                    <h2>My Projects</h2>
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>Description of Project 1...</p>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>Description of Project 2...</p>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
