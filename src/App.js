import React from 'react';
import NavBar from './components/NavBar'
import MasterHead from './components/MasterHead'
import About from './components/About'
import Projects from './components/Projects'
import SignUp from './components/SignUp'
import Contact from './components/Contact'

function App() {

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

export default App;
