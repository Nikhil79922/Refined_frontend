import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store';  // Import the Redux store
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
  <StrictMode>
    <App />
  </StrictMode>,
  </Provider>,
)
