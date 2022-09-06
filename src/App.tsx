import { Navbar } from './components/Navbar';
import { NavItem } from './components/NavItem';
import './App.css';
import { PlayerCard } from './components/PlayerCard';
import { ReactComponent as Arrow} from './images/arrow.svg';

function App() {
  return (
    <div className="App">
      <>
        <Navbar>
          <NavItem icon={<Arrow />} />
        </Navbar>
        <PlayerCard />
      </>
      
    </div>
  );
}

export default App;
