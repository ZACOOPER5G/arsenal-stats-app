import { Navbar } from './components/Navbar';
import { NavItem } from './components/NavItem';
import './App.css';
import { PlayerCard } from './components/PlayerCard';
import { ReactComponent as Arrow} from './images/arrow.svg';
import { DropdownMenu } from './components/DropdownMenu';
import { useState, } from 'react';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const getCurrentPlayer = (player: any) => {
    setCurrentPlayer(player)
  } 

  return (
    <div className="App">
      <>
        <Navbar >
          <NavItem icon={<Arrow />}  >
            <DropdownMenu player={getCurrentPlayer}  />
          </NavItem>
        </Navbar>
        {
          currentPlayer ? 
          <PlayerCard player={currentPlayer} /> :
          <div className="container">
            <div className="card">
              <h1 className='intro-menu'>Use the menu in the top right to select a player!</h1>
              <img className="home-img" src='./images/arsenal-team.png' alt='home-banner' />
              <div className="stats-container-home">
                <h1 className='description'>Welcome to the Arsenal Fan Stat Tracker. Select any one of your favourite players from the arsenal starting XI to see how they have been performing this season in the Premier League.</h1>
                <h1 className='description'>Check back in throughout the season for new updates, and happy tracking!</h1>
              </div>
            </div>
          </div> 
        }
        

      </>
      
    </div>
  );
}

export default App;
