import React from 'react';
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles/>
        <App />
    </React.StrictMode>
);

