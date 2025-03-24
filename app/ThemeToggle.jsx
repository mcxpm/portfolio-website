'use client';

import { Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from './ThemeContext';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext();
  
  return (
    <Button
      onClick={toggleTheme}
      color="inherit"
      startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    >
    </Button>
  );
} 