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
        props.player(e.target.className);
        props.menu(!props.menu);
        props.changePage();
        props.team(false);
    };

    const getTeamActive = () => {
        props.team(true);
        props.menu(!props.menu);
        props.player(null);
    };

    const style = {
        'height': '50px', 
        'display': 'flex', 
        'alignItems': 'center', 
        'width': '100%',
    };

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);

    const calcHeight = (el: any) => {
        const height = el.offsetHeight
        setMenuHeight(height)
    };

    const DropdownItem = (props: any) => {
        return (
            <a onClick={() => {
                        props.goToMenu && setActiveMenu(props.goToMenu);
                    }} 
                    href="#" className="menu-item" 
                >
                <span 
                    className="icon-button"
                    
                >{props.leftIcon}</span>

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
                >
                    <span 
                        style={style}
                        onClick={getTeamActive}
                    > 
                        Team Stats
                    </span>
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
                in={activeMenu === 'players'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
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
                    className='martin-odegaard'
                  >
                    <span 
                        className="martin-odegaard"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Martin Odegaard
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/saka-icon.png' className='saka-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="bukayo-saka"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Bukayo Saka
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/martinelli-icon.png' className='martinelli-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    < span
                        className="gabriel-martinelli"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Martinelli
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/smith-rowe-icon.png' className='smith-rowe-icon' />} 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="emile-smith-rowe"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Emile Smith-Rowe
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/jesus-icon.png' className='jesus-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span
                        className="gabriel-jesus"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Jesus
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/gabriel-icon.png' className='gabriel-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="gabriel-magalhaes"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Gabriel Magalhães
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/partey-icon.png' className='partey-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="thomas-partey"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Thomas Partey
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/xhaka-icon.png' className='xhaka-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="granit-xhaka"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Granit Xhaka
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/tierney-icon.png' className='tierney-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="kieran-tierney"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Kieran Tierney
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/saliba-icon.png' className='saliba-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="william-saliba"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        William Saliba
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/white-icon.png' className='white-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="ben-white"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Ben White
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/tomiyasu-icon.png' className='tomiyasu-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="takehiro-tomiyasu"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Takehiro Tomiyasu
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/ramsdale-icon.png' className='ramsdale-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="aaron-ramsdale"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Aaron Ramsdale
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/zinchenko-icon.png' className='zinchenko-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="oleksandr-zinchenko"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Oleksandr Zinchenko
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/lokonga-icon.png' className='lokonga-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="sambi-lokonga"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Albert Sambi Lokonga
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/elneny-icon.png' className='elneny-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="mohamed-elneny"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Mohamed Elneny
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/nketiah-icon.png' className='nketiah-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="eddie-nketiah"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Eddie Nketiah
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/holding-icon.png' className='holding-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="rob-holding"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Rob Holding
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/marquinhos-icon.png' className='marquinhos-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="marquinhos"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Marquinhos
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/cedric-icon.png' className='cedric-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="cedric-soares"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Cédric Soares
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/vieira-icon.png' className='vieira-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="fabio-vieira"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Fábio Vieira
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/turner-icon.png' className='turner-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="matt-turner"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Matt Turner
                    </span>
                </DropdownItem>
                <DropdownItem 
                    leftIcon={ <img src='/images/nelson-icon.png' className='nelson-icon' /> } 
                    onClick={getCurrentPlayer}
                  >
                    <span 
                        className="reiss-nelson"
                        style={style}
                        onClick={getCurrentPlayer}
                    >
                        Reiss Nelson
                    </span>
                </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
