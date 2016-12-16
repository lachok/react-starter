import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'

import './main.less'
import 'file?name=[name].[ext]!../index.html'
import App from './App'
import { AppContainer } from 'react-hot-loader'

const renderApp = (AppComponent) => {
  render(<AppContainer component={AppComponent} />, document.getElementById('app'))
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
      renderApp(require('./App').default)
  })
}