// TestComponent.js
import React, { useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';


const TestComponent = () => {
    const { authToken, getAuthToken } = useAuth();
   

    console.log('Test Auth Token:', authToken);
  
    // اینجا می‌توانید getAuthToken را استفاده کنید:
    const fetchAuthToken = async () => {
      const token = await getAuthToken();
      console.log('Fetched Auth Token:', token);
    };
  
    // اجرای تابع بالا:
    fetchAuthToken();
  
  return (
    <div>
      {/* محتوای دیگر کامپوننت */}
    </div>
  );
};

export default TestComponent;
