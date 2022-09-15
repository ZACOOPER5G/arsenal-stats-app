import { ReactComponent as ArsenalLogo} from '../images/arsenal-logo.svg';
// import { ReactComponent as PlayerIcon} from '../images/player-icon.svg';
import { ReactComponent as Arrow} from '../images/arrow.svg';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
// import { ReactComponent as MartinIcon } from '../images/martin.svg'

type DropdownMenuProps = {
    currentPlayer: () => void
}

export const DropdownMenu = (props: any): any => {
    const [activeMenu, setActiveMenu] = useState<string>('main');

    const [menuHeight, setMenuHeight] = useState(null);

    const dropdownRef = useRef<any>(null);

    const getCurrentPlayer = (e: any) => {
        props.player(e.target.className)
    }

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    const calcHeight = (el: any) => {
        const height = el.offsetHeight
        setMenuHeight(menuHeight)
    }

    const DropdownItem = (props: any) => {
        return (
            <a onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: `${menuHeight}px` }}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                 <div className='menu'>
                     
                <DropdownItem 
                    leftIcon={<ArsenalLogo style={{transform:"scale(0.8, 0.8) translateY(0.4%)"}}/>} 
                    rightIcon={<Arrow style={{transform:"rotate(-90deg) scale(0.9, 0.9) translateX(3%) translateY(10%)"}}/>}
                >
                    Team Stats
                </DropdownItem>
                <DropdownItem 
                    goToMenu="players" 
                    leftIcon={ `👤` } 
                    rightIcon={<Arrow style={{transform:"rotate(-90deg) scale(0.9, 0.9) translateX(3%) translateY(10%)"}}/>}
                >
                    Player Stats
                </DropdownItem>

                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'players'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
            >
                 <div className='menu'>
                     
                <DropdownItem
                    goToMenu="main" 
                    rightIcon={<Arrow style={{transform: "rotate(90deg)"}}/>}
                >
                    Return
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="martin-odegaard"
                        onClick={getCurrentPlayer}
                    >
                        Martin Odegaard
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="bukayo-saka"
                        onClick={getCurrentPlayer}
                    >
                        Bukayo Saka
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="gabriel-martinelli"
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Martinelli
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="emile-smith-rowe"
                        onClick={getCurrentPlayer}
                    >
                        Emile Smith-Rowe
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="gabriel-jesus"
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Jesus
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="gabriel-magalhaes"
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Magalhães
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="thomas-partey"
                        onClick={getCurrentPlayer}
                    >
                        Thomas Partey
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="granit-xhaka"
                        onClick={getCurrentPlayer}
                    >
                        Granit Xhaka
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="kieran-tierney"
                        onClick={getCurrentPlayer}
                    >
                        Kieran Tierney
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="william-saliba"
                        onClick={getCurrentPlayer}
                    >
                        William Saliba
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="ben-white"
                        onClick={getCurrentPlayer}
                    >
                        Ben White
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="takehiro-tomiyasu"
                        onClick={getCurrentPlayer}
                    >
                        Takehiro Tomiyasu
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="aaron-ramsdale"
                        onClick={getCurrentPlayer}
                    >
                        Aaron Ramsdale
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="oleksandr-zinchenko"
                        onClick={getCurrentPlayer}
                    >
                        Oleksandr Zinchenko
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="sambi-lokonga"
                        onClick={getCurrentPlayer}
                    >
                        Albert Sambi Lokonga
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ 'X' } 

                  >
                    <p 
                        className="mohamed-elneny"
                        onClick={getCurrentPlayer}
                    >
                        Mohamed Elneny
                    </p>
                </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
