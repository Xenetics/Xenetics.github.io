import logo from './roclogo.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="Socials">
                    <SocialIcon className="social" url="https://www.linkedin.com/in/rory-o-connor-5bb0737a" />
                    <SocialIcon className="social" url="https://twitter.com/xenthered" />
                    <SocialIcon className="social" url="https://github.com/Xenetics" />
                </div>
            </header>
        </div>
    );
}

export default App;
