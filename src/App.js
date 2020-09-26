import React from 'react'
import NavBar from './components/NavBar'
import MasterHead from './components/MasterHead'
import About from './components/About'
import Projects from './components/Projects'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import $ from 'jquery'

class App extends React.Component {

  componentDidMount () {
    this.navbarCollapse();
    $(window).scroll(this.navbarCollapse);
  }

  navbarCollapse = () => {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
  };

  render () {
    return (
      <React.Fragment>
        <NavBar/>
        <MasterHead/>
        <About/>
        <Projects/>
        <SignUp/>
        <Contact/>
      </React.Fragment>
    );
  }
}

export default App;
