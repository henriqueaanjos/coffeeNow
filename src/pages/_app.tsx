import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../global/styles/globals"
import theme from "../global/styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalStyle>
    </>
  )
}

export default MyApp
