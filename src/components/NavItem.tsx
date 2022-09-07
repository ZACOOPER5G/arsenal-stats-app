import { useState } from "react"

export const NavItem = (props: any) => {
    const [open, setOpen]  = useState<Boolean>(false)

    return (
      <li className="nav-item">
          <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
              {props.icon}
          </a>
      </li>
    )
  }