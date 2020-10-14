import React, { FC, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'Store'
import ThemeProvider from 'Components/Theme/ThemeProvider'
import GlobalStyle from 'Styles/GlobalStyle'

const Providers: FC = ({ children }) => (
  <StrictMode>
    <HelmetProvider>
      {process.env.NODE_ENV !== 'production' && (
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      )}
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ThemeProvider>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </StrictMode>
)

export default Providers
