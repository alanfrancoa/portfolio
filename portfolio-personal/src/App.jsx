// app.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/navbar';
import Intro from './Components/Intro/intro';
import About from './Components/About/About';
import Works from './Components/Works/works';
import Skills from './Components/Skills/Skills';
import ContactUs from './Components/Contact/ContactUs';
import ThemeContext from './context/themeContext.jsx'; // Importa ThemeProvider junto con ThemeContext
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext); // Usa el contexto directamente
  
  return (
      <div className={`cuerpo ${theme}`}>
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
      </div>
  );
}

export default App;
