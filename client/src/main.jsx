import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './css/index.css'

import App from './App.jsx'

import ScrollToTop from './ScrollToTop'
import { store } from "./store/store.js"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Provider store={store}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </Provider>
  </BrowserRouter>
)
