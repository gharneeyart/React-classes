import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //  bootstrap css
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from './contexts/ThemeContexts.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
    <App />
    </ThemeContext>
  </React.StrictMode>,
)
