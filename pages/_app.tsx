import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect } from 'react'
import DateAdapter from '@mui/lab/AdapterLuxon'
import { theme } from '../styles/theme'

//If Mui breaks, implement https://itnext.io/next-js-with-material-ui-7a7f6485f671
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <title>Saga Fjordbase</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={DateAdapter} locale={'nb-no'}>
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
