import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, ButtonGroup, Link } from '@mui/material';
import { SoulvetLogo } from './SoulvetLogo';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState<'en' | 'zh' | 'ja'>('en');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // Store login state
      chrome.storage.local.set({ 
        isLoggedIn: true, 
        userEmail: email,
        language: language 
      });
      setIsLoading(false);
      onLoginSuccess();
    }, 1000);
  };

  const handleLanguageChange = (lang: 'en' | 'zh' | 'ja') => {
    setLanguage(lang);
  };

  const getLanguageText = () => {
    switch (language) {
      case 'zh':
        return {
          account: '账户 (邮箱)',
          password: '密码',
          login: '登录',
          forgotPassword: '忘记密码',
          chinese: '中文',
          english: 'ENGLISH',
          japanese: '日本語'
        };
      case 'ja':
        return {
          account: 'アカウント (メール)',
          password: 'パスワード',
          login: 'ログイン',
          forgotPassword: 'パスワードを忘れた',
          chinese: '中文',
          english: 'ENGLISH',
          japanese: '日本語'
        };
      default:
        return {
          account: 'Account (Email)',
          password: 'Password',
          login: 'Login',
          forgotPassword: 'Forgot Password',
          chinese: '中文',
          english: 'ENGLISH',
          japanese: '日本語'
        };
    }
  };

  const text = getLanguageText();

  return (
    <Box 
      className="extension-popup"
      sx={{ 
        backgroundColor: '#C4A484',
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <SoulvetLogo size={48} />
        </Box>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#6B5B3F',
            letterSpacing: '0.2em',
            textAlign: 'center'
          }}
        >
          SOULVET
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 320 }}>
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white', 
              mb: 1, 
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            {text.account}
          </Typography>
          <TextField
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiInputBase-input': {
                color: 'white',
                fontSize: '0.875rem',
                padding: '8px 0',
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white', 
              mb: 1, 
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            {text.password}
          </Typography>
          <TextField
            fullWidth
            type="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
              '& .MuiInputBase-input': {
                color: 'white',
                fontSize: '0.875rem',
                padding: '8px 0',
              },
            }}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={isLoading || !email || !password}
          sx={{
            backgroundColor: 'white',
            color: '#C4A484',
            fontSize: '1rem',
            fontWeight: 600,
            py: 1.5,
            mb: 2,
            borderRadius: 1,
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
            '&:disabled': {
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: 'rgba(196, 164, 132, 0.5)',
            },
          }}
        >
          {isLoading ? 'Logging in...' : text.login}
        </Button>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Link 
            href="#" 
            sx={{ 
              color: 'white', 
              textDecoration: 'underline',
              fontSize: '0.875rem',
              '&:hover': {
                color: '#f5f5f5',
              }
            }}
          >
            {text.forgotPassword}
          </Link>
        </Box>

        <ButtonGroup 
          fullWidth 
          variant="contained" 
          sx={{ 
            '& .MuiButton-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              py: 1,
            },
            '& .MuiButton-root.active': {
              backgroundColor: '#6B5B3F',
              color: 'white',
            },
            '& .MuiButton-root:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <Button 
            className={language === 'zh' ? 'active' : ''}
            onClick={() => handleLanguageChange('zh')}
          >
            {text.chinese}
          </Button>
          <Button 
            className={language === 'en' ? 'active' : ''}
            onClick={() => handleLanguageChange('en')}
          >
            {text.english}
          </Button>
          <Button 
            className={language === 'ja' ? 'active' : ''}
            onClick={() => handleLanguageChange('ja')}
          >
            {text.japanese}
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};