import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import React from 'react';
import App from './App';
import theme from './theme';

export interface EmailBuilderProps {
  onSave?: (data: any) => void;
  initialData?: any;
}

export const EmailBuilder: React.FC<EmailBuilderProps> = ({ onSave, initialData }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default EmailBuilder; 