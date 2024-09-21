// App.js
import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { AuthProvider ,getAuthToken} from './components/auth/AuthContext';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/logout';

import Forget from './components/auth/Forget';
import Setnewpassword from './components/auth/Setnewpassword';
import First from './components/main-page/First';
import Manual from './components/main-page/manual';
import Product from './components/main-page/Products';
import Cart from './components/main-page/Cart';
import BuyForm from './components/main-page/SenderInfoForm';
import AboutSection from './components/main-page/AboutSection';


import TestComponent from './components/main-page/TestComponent';

function App() {
  return (
    <div>
      
      <React.StrictMode>
      
            <Routes>
              <Route exact path="/" element={<First />} />
             
            </Routes>
          
        
      </React.StrictMode>
    </div>
  );
}

export default App;
