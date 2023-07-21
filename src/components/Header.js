import "./Header.css";

export default function Header({logo}) {
    return ( <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>My Portfolio</h1>
  </header>)
}