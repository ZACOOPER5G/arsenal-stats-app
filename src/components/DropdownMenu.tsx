import { ReactComponent as ArsenalLogo} from '../images/arsenal-logo.svg';
import { ReactComponent as Arrow} from '../images/arrow.svg';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

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
                    goToMenu="team" 
                >
                    Team Stats
                </DropdownItem>
                <DropdownItem 
                    goToMenu="players" 
                    leftIcon={ <img src='/images/player-icon.png' className='player-icon' /> } 
                    rightIcon={<Arrow style={{transform:"rotate(-90deg) scale(0.9, 0.9) translateX(3%) translateY(10%)"}}/>}
                >
                    Player Stats
                </DropdownItem>

                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'team'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                 <div className='menu'>
                     
                <DropdownItem 
                    leftIcon={<ArsenalLogo style={{transform:"scale(0.8, 0.8) translateY(0.4%)"}}/>} 
                    rightIcon={<Arrow style={{transform:"rotate(-90deg) scale(0.9, 0.9) translateX(3%) translateY(10%)"}}/>}
                    goToMenu="main"
                >
                    Coming Soon...
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
                    leftIcon={ <img src='/images/odegaard-icon.png' className='odegaard-icon' /> } 
                  >
                    <p 
                        className="martin-odegaard"
                        onClick={getCurrentPlayer}
                    >
                        Martin Odegaard
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/saka-icon.png' className='saka-icon' /> } 
                  >
                    <p 
                        className="bukayo-saka"
                        onClick={getCurrentPlayer}
                    >
                        Bukayo Saka
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/martinelli-icon.png' className='martinelli-icon' /> } 
                  >
                    <p 
                        className="gabriel-martinelli"
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Martinelli
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/smith-rowe-icon.png' className='smith-rowe-icon' />} 
                  >
                    <p 
                        className="emile-smith-rowe"
                        onClick={getCurrentPlayer}
                    >
                        Emile Smith-Rowe
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/jesus-icon.png' className='jesus-icon' /> } 
                  >
                    <p 
                        className="gabriel-jesus"
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Jesus
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/gabriel-icon.png' className='gabriel-icon' /> } 
                  >
                    <p 
                        className="gabriel-magalhaes"
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Magalhães
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/partey-icon.png' className='partey-icon' /> } 
                  >
                    <p 
                        className="thomas-partey"
                        onClick={getCurrentPlayer}
                    >
                        Thomas Partey
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/xhaka-icon.png' className='xhaka-icon' /> } 
                  >
                    <p 
                        className="granit-xhaka"
                        onClick={getCurrentPlayer}
                    >
                        Granit Xhaka
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/tierney-icon.png' className='tierney-icon' /> } 
                  >
                    <p 
                        className="kieran-tierney"
                        onClick={getCurrentPlayer}
                    >
                        Kieran Tierney
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/saliba-icon.png' className='saliba-icon' /> } 
                  >
                    <p 
                        className="william-saliba"
                        onClick={getCurrentPlayer}
                    >
                        William Saliba
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/white-icon.png' className='white-icon' /> } 
                  >
                    <p 
                        className="ben-white"
                        onClick={getCurrentPlayer}
                    >
                        Ben White
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/tomiyasu-icon.png' className='tomiyasu-icon' /> } 
                  >
                    <p 
                        className="takehiro-tomiyasu"
                        onClick={getCurrentPlayer}
                    >
                        Takehiro Tomiyasu
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/ramsdale-icon.png' className='ramsdale-icon' /> } 
                  >
                    <p 
                        className="aaron-ramsdale"
                        onClick={getCurrentPlayer}
                    >
                        Aaron Ramsdale
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/zinchenko-icon.png' className='zinchenko-icon' /> } 
                  >
                    <p 
                        className="oleksandr-zinchenko"
                        onClick={getCurrentPlayer}
                    >
                        Oleksandr Zinchenko
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/lokonga-icon.png' className='lokonga-icon' /> } 
                  >
                    <p 
                        className="sambi-lokonga"
                        onClick={getCurrentPlayer}
                    >
                        Albert Sambi Lokonga
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/elneny-icon.png' className='elneny-icon' /> } 
                  >
                    <p 
                        className="mohamed-elneny"
                        onClick={getCurrentPlayer}
                    >
                        Mohamed Elneny
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/nketiah-icon.png' className='nketiah-icon' /> } 
                  >
                    <p 
                        className="eddie-nketiah"
                        onClick={getCurrentPlayer}
                    >
                        Eddie Nketiah
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/holding-icon.png' className='holding-icon' /> } 
                  >
                    <p 
                        className="rob-holding"
                        onClick={getCurrentPlayer}
                    >
                        Rob Holding
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/marquinhos-icon.png' className='marquinhos-icon' /> } 
                  >
                    <p 
                        className="marquinhos"
                        onClick={getCurrentPlayer}
                    >
                        Marquinhos
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/cedric-icon.png' className='cedric-icon' /> } 
                  >
                    <p 
                        className="cedric-soares"
                        onClick={getCurrentPlayer}
                    >
                        Cédric Soares
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/vieira-icon.png' className='vieira-icon' /> } 
                  >
                    <p 
                        className="fabio-vieira"
                        onClick={getCurrentPlayer}
                    >
                        Fábio Vieira
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/turner-icon.png' className='turner-icon' /> } 
                  >
                    <p 
                        className="matt-turner"
                        onClick={getCurrentPlayer}
                    >
                        Matt Turner
                    </p>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/nelson-icon.png' className='nelson-icon' /> } 
                  >
                    <p 
                        className="reiss-nelson"
                        onClick={getCurrentPlayer}
                    >
                        Reiss Nelson
                    </p>
                </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
