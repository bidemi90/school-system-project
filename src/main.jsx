import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './Components/Redux/Store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={Store}>

  <App/>
  </Provider>
   </BrowserRouter>
)
