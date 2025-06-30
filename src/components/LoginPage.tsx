import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Link,
  ButtonGroup,
  styled
} from '@mui/material';
import { SoulvetLogo } from './SoulvetLogo';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#C4A484',
  padding: theme.spacing(2),
}));

const LoginCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  minWidth: 400,
  maxWidth: 500,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 0,
    '&:before': {
      borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
    },
    '&:hover:before': {
      borderBottom: '2px solid rgba(255, 255, 255, 0.9)',
    },
    '&:after': {
      borderBottom: '2px solid white',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    fontSize: '1.1rem',
    padding: theme.spacing(1.5, 0),
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.1rem',
    '&.Mui-focused': {
      color: 'white',
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#8B6F3F',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 500,
  borderRadius: 8,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  width: '100%',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'translateY(-1px)',
  },
}));

const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  color: 'white',
  fontSize: '1rem',
  textDecoration: 'underline',
  marginBottom: theme.spacing(4),
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
}));

const LanguageButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  '& .MuiButton-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: theme.spacing(1, 3),
    fontSize: '1rem',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    '&.active': {
      backgroundColor: 'rgba(139, 111, 63, 0.8)',
      color: 'white',
    },
  },
}));

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <StyledContainer maxWidth={false}>
      <LoginCard>
        {/* SOULVET Logo */}
        <Box sx={{ mb: 6 }}>
          <SoulvetLogo size={64} />
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: '3rem',
              textAlign: 'center',
              mt: 2,
              letterSpacing: '0.1em',
            }}
          >
            SOULVET
          </Typography>
        </Box>

        {/* Login Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <StyledTextField
            fullWidth
            variant="standard"
            label="Account (Email)"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 4 }}
            required
          />

          <StyledTextField
            fullWidth
            variant="standard"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
            required
          />

          <LoginButton type="submit" variant="contained" disableElevation>
            Login
          </LoginButton>

          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <ForgotPasswordLink href="#" underline="always">
              Forgot Password
            </ForgotPasswordLink>
          </Box>

          {/* Language Selection */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LanguageButtonGroup variant="contained" disableElevation>
              <Button
                className={selectedLanguage === '中文' ? 'active' : ''}
                onClick={() => handleLanguageChange('中文')}
              >
                中文
              </Button>
              <Button
                className={selectedLanguage === 'ENGLISH' ? 'active' : ''}
                onClick={() => handleLanguageChange('ENGLISH')}
              >
                ENGLISH
              </Button>
              <Button
                className={selectedLanguage === '日本語' ? 'active' : ''}
                onClick={() => handleLanguageChange('日本語')}
              >
                日本語
              </Button>
            </LanguageButtonGroup>
          </Box>
        </Box>
      </LoginCard>
    </StyledContainer>
  );
};