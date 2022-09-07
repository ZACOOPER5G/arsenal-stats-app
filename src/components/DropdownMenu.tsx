import { ReactComponent as ArsenalLogo} from '../images/arsenal-logo.svg';
import { ReactComponent as PlayerIcon} from '../images/player-icon.svg';
import { ReactComponent as Arrow} from '../images/arrow.svg';

const DropdownItem = (props: any) => {
    return (
        <a href="#" className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>

            {props.children}

            <span className="icon-button">{props.rightIcon}</span>
        </a>
    )
}

export const DropdownMenu = () => {
    return (
        <div className="dropdown">
            <DropdownItem leftIcon={<ArsenalLogo style={{transform:"scale(0.8, 0.8) translateY(0.4%)"}}/>} rightIcon={<Arrow style={{transform:"rotate(-90deg) scale(0.9, 0.9) translateX(3%) translateY(10%)"}}/>}>Team Stats</DropdownItem>
            <DropdownItem leftIcon={ `👤` } rightIcon={<Arrow style={{transform:"rotate(-90deg) scale(0.9, 0.9) translateX(3%) translateY(10%)"}}/>}>Player Stats</DropdownItem>
        </div>
    )
}
