import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { baseUrl } from '../../axiosConfig';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { BsFileText, BsBox,BsBicycle, BsCardTravel, BsCart, BsHouseDoor  } from 'react-icons/bs';
import { FaUserPlus, FaLock, FaLockOpen } from 'react-icons/fa';

const Logout = ({ accessToken, refreshToken }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { getAuthToken } = useAuth();

  const handleLogout = async () => {
    try {
        const authToken = await getAuthToken();

      const response = await axios.post(
        `${baseUrl}/auth/logout/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // اضافه کردن اکسس توکن به هدر درخواست
            'Content-Type': 'application/json', // تنظیم Content-Type به application/json
          },
          data: { refresh: refreshToken }, // ارسال رفرش توکن به عنوان بدنه درخواست
        }
      );
      
      if (response.status === 200) {
        // پاک کردن توکن‌ها از ذخیره‌سازی محلی
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        // هدایت به صفحه ورود یا صفحه اصلی
        window.location.reload();
      } else {
        setError('خطا در خروج');
      }
    } catch (error) {
      console.error('خطای درخواست خروج:', error);
      setError('خطای درخواست خروج');
    }
  };

  return (
    <div>
        <NavDropdown.Item   style={{  color:"#000000",textAlign:"right"}} onClick={handleLogout}><FaLockOpen /><span> خروج</span></NavDropdown.Item>
      
    </div>
  );
};

export default Logout;
