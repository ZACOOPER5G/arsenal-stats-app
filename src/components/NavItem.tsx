import { useEffect, useRef, useState } from "react";

export const NavItem = (props: any) => {
    const [open, setOpen]  = useState<Boolean>(false);

    const menuRef: any = useRef();

    useEffect(() => {
      console.log(props.menu)
      let handler = (event: any) => {
        if (!menuRef.current?.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
        }
    }, []);

    return (
      <li className="nav-item" ref={menuRef} >
          <a href="#" className="icon-button" onClick={() => props.setMenu(!props.menu)} >
              {props.icon}
          </a>
          {/* opens dropdown menu upon clicking chevron */}
          {props.menu && props.children}
      </li>
    )
  }