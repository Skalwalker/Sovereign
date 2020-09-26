import React from 'react';
import NavBar from './components/NavBar'
import MasterHead from './components/MasterHead'
import About from './components/About'
import Projects from './components/Projects'
import SignUp from './components/SignUp'
import Contact from './components/Contact'

class App extends React.Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.type = 'text/js'
    script.src = "./assets/js/scripts.js";
    // script.async = true;
    document.body.appendChild(script);
    eval(script);
  }

  shouldComponentUpdate() {
    return false;
  }

  render (){
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
