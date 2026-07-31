/**
 * ThemeContext.jsx
 * Manages the active theme token, persists to localStorage,
 * and writes data-theme to <html> so all CSS variable overrides activate.
 *
 * Usage:
 *   import { useTheme } from '../contexts/ThemeContext';
 *   const { theme, setTheme, themes } = useTheme();
 */
import { createContext, useContext, useEffect, useState } from 'react';

export const THEMES = [
  {
    id: 'forest',
    name: 'Forest Dark',
    label: 'Forest',
    accent: '#c5e32b',
    description: 'Deep teal · Lime · Current',
  },
  {
    id: 'cyber',
    name: 'Cyber Blue',
    label: 'Cyber',
    accent: '#38bdf8',
    description: 'Charcoal · Electric blue · Neon',
  },
  {
    id: 'luxury',
    name: 'Luxury Gold',
    label: 'Luxury',
    accent: '#b8860b',
    description: 'Cream · Gold · Editorial',
  },
];

const DEFAULT_THEME = 'forest';
const STORAGE_KEY = 'probey-theme';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(DEFAULT_THEME);

  // On mount: read persisted theme and apply immediately
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    applyTheme(saved);
    setThemeState(saved);
  }, []);

  const setTheme = (id) => {
    applyTheme(id);
    setThemeState(id);
    localStorage.setItem(STORAGE_KEY, id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Applies data-theme to <html> and triggers a smooth CSS transition
function applyTheme(id) {
  const html = document.documentElement;
  // Brief transition on html so page colours cross-fade smoothly
  html.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  html.setAttribute('data-theme', id);
  // Clean up the transition override after it completes
  setTimeout(() => {
    html.style.transition = '';
  }, 450);
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};

export default ThemeProvider;
