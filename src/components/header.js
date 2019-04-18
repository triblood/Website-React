import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
	render() {
		return (
			
			<header className="default-header">
				<div className="container">
					<a href="/" className="logo"><img src="https://via.placeholder.com/113x30?text=LOGO" /></a>
					<nav className="menu">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/sobre">A Empresa</Link></li>
							<li><Link to="/servicos">Os Serviços</Link></li>
							<li><Link to="/fale-conosco">Fale Conosco</Link></li>
						</ul>
					</nav>
				</div>
			</header>
			
		);
	}
}

export default Header;
