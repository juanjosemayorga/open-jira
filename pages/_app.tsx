import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack';
import { CssBaseline, ThemeProvider } from '@mui/material'

import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

import { darkTheme } from '../themes/dark-theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}
