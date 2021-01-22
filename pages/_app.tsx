/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

import './test.css';
export default function App({ Component, pageProps }) {
  return( 
  <ThemeProvider theme={theme}>
  <div>
    <Component {...pageProps} />
  </div>      
</ThemeProvider>)
}
