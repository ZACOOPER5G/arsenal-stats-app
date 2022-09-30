

export const Navbar = (props: any) => {
  return (
    <nav className="navbar">
        <ul className="navbar-nav">
            <li className="nav-logo">Arsenal Fan Stat Tracker</li>
            {props.children}
        </ul>
    </nav>
  )
}
