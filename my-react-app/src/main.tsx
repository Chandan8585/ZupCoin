import React from 'react'
import ReactDOM from 'react-dom/client';
import { OutProvider } from './context/OutContext';
// import App from './App.tsx'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OutProvider>
    <App />
    </OutProvider>
  
   
 
  </React.StrictMode>,
)
