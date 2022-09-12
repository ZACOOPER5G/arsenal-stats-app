import { Navbar } from './components/Navbar';
import { NavItem } from './components/NavItem';
import './App.css';
import { PlayerCard } from './components/PlayerCard';
import { ReactComponent as Arrow} from './images/arrow.svg';
import { DropdownMenu } from './components/DropdownMenu';
import { useState } from 'react';
import playerData from './data/players.json'

function App() {
  const [playerList, setPlayerList] = useState([playerData]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  const getCurrentPlayer = (player: any) => {
    console.log("here is your player: " + player)
    setCurrentPlayer(player)
  }

  return (
    <div className="App">
      <>
        <Navbar>
          <NavItem icon={<Arrow />} >
            <DropdownMenu player={getCurrentPlayer} />
          </NavItem>
        </Navbar>
        
          <PlayerCard />

      </>
      
    </div>
  );
}

export default App;
