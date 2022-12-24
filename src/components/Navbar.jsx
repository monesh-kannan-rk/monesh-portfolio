import React, { useState } from 'react'

function Navbar() {
    const [isNavExpandend, setIsNavExpanded] = useState(false)
    const barclick = (event) =>{

    }
    console.log(isNavExpandend);
  return (
    <div  style={{color:'white'}}>
        <nav className="navigation">
            <div className="logo">
                <h1>MK DEV</h1>
            </div>
                <ul className={isNavExpandend ? "menu-list" : "menu-list expanded"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#portfolio">Project</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            <div className="humbarger" onClick={() => {setIsNavExpanded(!isNavExpandend)}}>
                <div className="bar"></div>
                <div className="bar2 bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar