import React from 'react';

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
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Sobre</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Atividades</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">Contato</a></li>
                </ul>
            </div>
        </div>
        </nav>
        )
    }
  }


export default NavBar;
