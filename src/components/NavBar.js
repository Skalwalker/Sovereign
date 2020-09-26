import React from 'react';
import Scrollspy from 'react-scrollspy'
import NavItem from './NavItem'

class NavBar extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
					<a className="navbar-brand js-scroll-trigger" href="#page-top">Sovereign</a>
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						Menu  <i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<Scrollspy className="navbar-nav ml-auto" items={ ['about', 'projects', 'signup'] } currentClassName="active">
							<NavItem href="about">Sobre</NavItem>
							<NavItem href="projects">Atividades</NavItem>
							<NavItem href="signup">Contato</NavItem>
						</Scrollspy>
					</div>
        </div>
        </nav>
        )
    }
  }


export default NavBar;
