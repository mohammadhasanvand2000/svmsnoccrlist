import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const CurrentPathIndicator = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const getDisplayText = () => {
    if (currentPath === '/') {
      return 'صفحه اصلی';
    } else if (currentPath === '/cart') {
      return 'سبد خرید';
    } else if (currentPath === '/pro') {
      return 'محصولات';
    } else if (currentPath.startsWith('/Detail/')) {
      return 'جزییات محصول';
    } else if (currentPath === '/forget') {
      return 'فراموشی رمز عبور';
    } else if (currentPath === '/login') {
      return 'ورود';
    } else if (currentPath === '/logout') {
      return 'خروج';
    } else if (currentPath === '/register') {
      return 'ثبت نام';
    } else {
      return 'صفحه ناشناخته';
    }
  };

  return (
    <div >
      <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
        <Link to={'/'} style={{ color: '#f5f5f5' }}>خانه</Link> /
        <Link to={currentPath} style={{ color: '#f5f5f5' }}>{getDisplayText()}</Link> 
      </p>
    </div>
  );
};

export default CurrentPathIndicator;
