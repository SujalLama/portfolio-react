import "./Header.css";
import {Link as RouterLink} from 'react-router-dom';

export default function Header({logo}) {
    return ( <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>My Portfolio</h1>
    <nav>
        <RouterLink to="/" className="App-link">
            About me
        </RouterLink>
        <RouterLink to="/projects" className="App-link">
            Projects
        </RouterLink>
    </nav>
  </header>)
}