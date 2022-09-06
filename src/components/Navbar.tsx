


  

export const Navbar = (props: any) => {
  return (
    <nav className="navbar">
        <ul className="navbar-nav">
            {props.children}
        </ul>
    </nav>
  )
}
