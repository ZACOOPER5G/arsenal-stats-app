import { useEffect, useRef } from "react";

export const NavItem = (props: any) => {
    const menuRef: any = useRef();

    useEffect(() => {
      let handler = (event: any) => {
        if (!menuRef.current?.contains(event.target)) {
          props.setMenu(false)
        }
      }
      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
        }
    }, []);

    const handleClick = () => {
      props.setMenu(!props.menu);
    }

    return (
      <li className="nav-item" ref={menuRef} >
          <a href="#" className="icon-button" onClick={handleClick} >
              {props.icon}
          </a>
          {/* opens dropdown menu upon clicking chevron */}
          {props.menu && props.children}
      </li>
    )
  }