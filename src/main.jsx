import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import GroceryApp from './GroceryApp'
import './index.scss'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GroceryApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
