import { ReactComponent as ArsenalLogo} from '../images/arsenal-logo.svg';
// import { ReactComponent as PlayerIcon} from '../images/player-icon.svg';
import { ReactComponent as Arrow} from '../images/arrow.svg';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState<string>('main');

    const [menuHeight, setMenuHeight] = useState(null);

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
                    leftIcon={ `👤` } 
                    rightIcon={<Arrow style={{transform:"rotate(-90deg) scale(0.9, 0.9) translateX(3%) translateY(10%)"}}
                />}>
                    Martin Odegaard
                </DropdownItem>

                </div>
            </CSSTransition>
        </div>
    )
}
