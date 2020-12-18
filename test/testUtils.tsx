import { render, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { MittEmitter } from 'next/dist/next-server/lib/mitt'
import theme from '../src/theme'
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  return (
    <RouterContext.Provider
      value={{
        route: '/',
        pathname: '/',
        asPath: '/',
        query: {},
        basePath: '',
        push: (_url, _as) => {
          return Promise.resolve(true)
        },
        replace: (_url, _as) => {
          return Promise.resolve(true)
        },
        reload: () => {
          return Promise.resolve(true)
        },
        prefetch: async () => {
          Promise.resolve(true)
        },
        back: () => {
          return Promise.resolve(true)
        },
        beforePopState: () => {
          return Promise.resolve(true)
        },
        isFallback: false,
        events: {} as MittEmitter,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RouterContext.Provider>
  )

  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
