

export const NavItem = (props: any) => {
    return (
      <li className="nav-item">
          <a href="#" className="icon-button">
              {props.icon}
          </a>
      </li>
    )
  }