import { createTheme } from '@mui/material/styles';

// SOULVET Color Palette - Warm Earth Tones
const soulvetColors = {
  primary: '#C4A484',
  secondary: '#A68A6A', 
  accent: '#8B6F3F',
  brown: '#6B5B3F',
  dark: '#4A3D2A',
  light: '#E8DDD0',
  cream: '#F5F2ED',
  warm: '#D4B896',
};

export const soulvetTheme = createTheme({
  palette: {
    primary: {
      main: soulvetColors.primary,
      light: soulvetColors.warm,
      dark: soulvetColors.secondary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: soulvetColors.brown,
      light: soulvetColors.light,
      dark: soulvetColors.dark,
      contrastText: '#ffffff',
    },
    background: {
      default: soulvetColors.cream,
      paper: '#ffffff',
    },
    text: {
      primary: soulvetColors.dark,
      secondary: soulvetColors.brown,
    },
    divider: soulvetColors.light,
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: soulvetColors.brown,
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 600,
      color: soulvetColors.brown,
    },
    h3: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: soulvetColors.brown,
    },
    body1: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      color: soulvetColors.dark,
    },
    body2: {
      fontSize: '0.6875rem',
      lineHeight: 1.5,
      color: soulvetColors.dark,
    },
    caption: {
      fontSize: '0.625rem',
      color: soulvetColors.brown,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.75rem',
          padding: '8px 16px',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: `0 4px 8px rgba(139, 111, 63, 0.2)`,
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: `0 2px 4px rgba(139, 111, 63, 0.2)`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: `1px solid rgba(107, 91, 63, 0.1)`,
          boxShadow: `0 2px 4px rgba(139, 111, 63, 0.1)`,
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: `0 4px 12px rgba(139, 111, 63, 0.15)`,
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: soulvetColors.light,
          color: soulvetColors.brown,
          border: `1px solid rgba(107, 91, 63, 0.2)`,
          fontSize: '0.6875rem',
          fontWeight: 500,
          height: 'auto',
          padding: '2px 8px',
          '& .MuiChip-label': {
            padding: '0 4px',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.75rem',
          minHeight: 40,
          padding: '8px 12px',
          color: soulvetColors.brown,
          '&.Mui-selected': {
            color: soulvetColors.primary,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: soulvetColors.primary,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.animate-paw': {
            animation: 'pawPrint 2s ease-in-out infinite',
          },
        },
      },
    },
  },
});