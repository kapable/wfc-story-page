import './App.css';
import { Link, Element } from 'react-scroll';
import Main from './components/Main.js';
import Story from './components/Story.js';
import NFT from './components/NFT.js';
import Roadmap from './components/Roadmap.js';
import Team from './components/Team.js';
import Partners from './components/Partners.js';

function App() {
  const menu_list = ['Home', 'Story', 'NFT', 'Roadmap', 'Team', 'Partnership'];
  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className='nav-bar-div'>
        {menu_list.map((v, i) => (
          <Link activeClass="active" className="nav-bar-link" key={`section-${i}`} to={`section-${i}`} spy={true} smooth={true} duration={500}>{v}</Link>
        ))}
      </div>
      {/* Main */}
      <Element name="section-0" className="main-element" ><Main /></Element>
      {/* Story */}
      <Element name="section-1" className="main-element" ><Story /></Element>
      {/* NFT */}
      <Element name="section-2" className="main-element" ><NFT /></Element>
      {/* Roadmap */}
      <Element name="section-3" className="main-element" ><Roadmap /></Element>
      {/* Team */}
      <Element name="section-4" className="main-element" ><Team /></Element>
      {/* Partners */}
      <Element name="section-5" className="main-element" ><Partners /></Element>
    </div>
  );
};

export default App;
