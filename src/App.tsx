import { Navbar } from './components/Navbar';
import { NavItem } from './components/NavItem';
import './App.css';
import { PlayerCard } from './components/PlayerCard';
import { ReactComponent as Arrow} from './images/arrow.svg';
import { DropdownMenu } from './components/DropdownMenu';
import { useState, } from 'react';
import { Button } from './components/Button';
import { Home } from './components/Home';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const getCurrentPlayer = (player: any, value: boolean) => {
    setCurrentPlayer(player);
  };

  const setMenuClose = (value: any) => {
    setMenuOpen(value);
  };

  const changePage = () => {
    setPage(1)
  };

  return (
    <div className="App">
      <>
        <Navbar >
          <NavItem icon={<Arrow />} menu={menuOpen} setMenu={setMenuClose} >
            <DropdownMenu player={getCurrentPlayer} menu={setMenuClose} changePage={changePage} />
          </NavItem>
        </Navbar>
        {
          currentPlayer ? 
            <div>
              <PlayerCard player={currentPlayer} page={page} />
              <Button page={page} handleIncrease={() => setPage(page + 1)} handleDecrease={() => setPage(page - 1)} />
            </div>
           :
          <Home />
        }
        

      </>
      
    </div>
  );
}

export default App;
