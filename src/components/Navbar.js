import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <div>
       			<nav className="navbar bg-dark navbar-expand-sm navbar-dark px-sm-5">
       				<Link to="/">
       					<img src={logo} alt="store" className="navbar-brand" />
       				</Link>
       				<ul className="navbar-nav align-iten-center">
       					<li className="nav-item ml-5">
       						<Link to="/" className="nav-link">
       							Products
       						</Link>
       					</li>
       				</ul>
       				<Link to="/cart" className="ml-auto">
       					<button className="btn btn-primary">
       						<i className="fas fa-cart-plus"></i> Cart
       					</button>
       				</Link>
       			</nav>	
        	</div>
        )
    }
}