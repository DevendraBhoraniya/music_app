import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";

const SidebarButton = (porps) => {

    const location = useLocation();

  const isActive = location.pathname === porps.to;

  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <>
      <Link to={porps.to}>
      <div className={btnClass} >
      <IconContext.Provider value={{ size: "20px", className: "btn-icon" }}>
      {porps.icon}
      <p className="m-[4px auto] font-medium text-base hidden md:block">{porps.title}</p>
      </IconContext.Provider>
      </div>
        
      </Link>
    </>
  )
}

export default SidebarButton
