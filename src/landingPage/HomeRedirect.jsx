import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeRedirect = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://reliqus.com/';
    }, 500); // Simulate loading time, adjust as needed
  }, []);

  return loading ? (<div className='loader fixed left-0 top-0 w-full h-full bg-white z-50'></div>) : null;
};

export default HomeRedirect;