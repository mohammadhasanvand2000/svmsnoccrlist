// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import App from './App';
import { AuthProvider } from './components/auth/AuthContext';

ReactDOM.render(
  
   <HashRouter  basename='/' >
      <App />
   </HashRouter>   
  ,
  
  document.getElementById('root')
);
