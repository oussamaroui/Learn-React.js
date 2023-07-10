import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
        <section>
            <h3>React Router</h3>
            <nav>
                <ul>
                  <li><NavLink className="navLink" to="/">Home</NavLink></li>
                  <li><NavLink className="navLink" to="/html">Html</NavLink></li>
                  <li><NavLink className="navLink" to="/css">Css</NavLink></li>
                  <li><NavLink className="navLink" to="/javascript">Javascript</NavLink></li>
                  <li><NavLink className="navLink" to="/wrong-path...">*Wrong Path*</NavLink></li>
                </ul>
            </nav>
        </section>
    </>
  )
}
