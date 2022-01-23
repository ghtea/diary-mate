import type {AppProps} from "next/app"
import {ThemeProvider} from "styled-components"
import {themes} from "styles/theme";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={themes.light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
