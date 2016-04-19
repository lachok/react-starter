import React from 'react'
import {render} from 'react-dom'

import './main.less'
import 'file?name=[name].[ext]!../index.html'
import App from './App'

render(<App />, document.getElementById('app'))