import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const NavLi = styled.li`
    display: inline-block;
    position: relative;

    a {
        display: block;
        color: rgb(102, 102, 102);
        text-decoration: none;
        padding: 0.75rem;
        border-bottom: 5px solid #fff;
        transition: color 0.5s ease-in-out, border-bottom-color 0.5s ease-in-out;

        &.active,
        &:hover {
            color: #000;
            border-bottom-color: rgb(245, 190, 56);
        }
    }
`

export default function Navbar() {

	return (
		<div>
		  <h2 className="accessible-hidden">Main navigation</h2>
          <ul className="navbar">
            <NavLi><Link to="/" activeClassName="active">Home</Link></NavLi>
            <NavLi>
                <Link 
                    to="/who-we-are" 
                    activeClassName="active" 
                >
                    Who We Are
                </Link>
            </NavLi>
            <NavLi activeClassName="active"><Link to="/what-we-do">What We Do</Link></NavLi>
            <NavLi activeClassName="active"><Link to="/get-involved">Get Involved</Link></NavLi>
          </ul>
        </div>
	)
}