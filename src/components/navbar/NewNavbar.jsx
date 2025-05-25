import { Link } from "react-router-dom"
import { useState } from "react"
import "./NewNavbar.css"


export default function NewNavbar( {userName = "Joshua"}){
  
    const [open, setOpen] = useState(false);
    const firstLetter = userName.charAt(0).toUpperCase();


    return(

   <nav className="navbar">
      <div >
        <h1 className="site-title"><Link to="/">PlanIt</Link></h1>
      </div>

      <div className="avatar-wrapper" onClick={() => setOpen(!open)}>
        <div className="avatar">
          <span className="avatar-letter">{firstLetter}</span>
        </div>
        
        {open && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/log-out">Log Out</Link></li>
            </ul>
          </div>
        )}
      </div>
   </nav>
  )
}