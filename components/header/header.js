import React, { Component } from 'react';
import { Menu } from '../menu/menu.js';
import logo from './logo.png';
import './header.css';

export class Header extends Component {
	render() {
		return (
			<header>
				<div className="header">
					<div className="wrapper">
						<div className="header__logo">
							<a href="https://betlio.com">
								<img src={logo} alt="logo" className="header__logo-img"/>
							</a>
							
						</div>
						<Menu/>
					</div>
				</div>
			
			</header>
		
		);
	}
};

