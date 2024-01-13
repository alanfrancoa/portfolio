// app.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/navbar';
import Intro from './Components/Intro/intro';
import About from './Components/About/about';
import Works from './Components/Works/works';
import Skills from './Components/Skills/Skills';

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
        </Switch>
      </>
    </Router>
  );
}

export default App;
