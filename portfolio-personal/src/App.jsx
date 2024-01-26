// app.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/navbar';
import Intro from './Components/Intro/intro';
import About from './Components/About/About';
import Works from './Components/Works/works';
import Skills from './Components/Skills/Skills';
import ContactUs from './Components/Contact/ContactUs';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/sobre-mi" component={About} />
          <Route path="/proyectos" component={Works} />
          <Route path="/skills" component={Skills} />
          <Route path="/contacto" component={ContactUs} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
