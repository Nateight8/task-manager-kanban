import Navbar from '@/components/Navbar/Navbar';
import { store } from '@/redux/store';
import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {


  let theme = createTheme({
    // palette: {
    //   primary: {
    //     main: 'red',
    //   },
    //   secondary: {
    //     main: '#edf2ff',
    //   },
    // },
  });

  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>)

}

