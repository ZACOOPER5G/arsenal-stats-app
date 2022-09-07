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
            <DropdownItem leftIcon={<ArsenalLogo/>} rightIcon={<Arrow/>}>Team Stats</DropdownItem>
            <DropdownItem leftIcon={<PlayerIcon/>} rightIcon={<Arrow/>}>Player Stats</DropdownItem>
        </div>
    )
}
