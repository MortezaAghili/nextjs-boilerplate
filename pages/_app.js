import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import withReduxStore from '../lib/with-redux-store'
import { theme } from '../theme/theme';

class MyApp extends App {
  constructor (props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Provider store={reduxStore}>
            <PersistGate
              loading={<Component {...pageProps} />}
              persistor={this.persistor}
            >
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
