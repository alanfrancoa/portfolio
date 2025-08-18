// ThemeContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { LanguageProvider } from './languageContext';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeContext;