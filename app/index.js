import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'

import './main.less'
import App from './App'
import { AppContainer } from 'react-hot-loader'

const renderApp = (AppComponent) => {
  render(<AppContainer><AppComponent /></AppContainer>, document.getElementById('app'))
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
      renderApp(require('./App').default)
  })
}