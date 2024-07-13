import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      id="themeSwitch"
      checked={theme === 'dark'}
      onChange={toggleTheme}
    />
    <label className="form-check-label" htmlFor="themeSwitch">
      theme
    </label>
  </div>
);

export default ThemeToggle;
