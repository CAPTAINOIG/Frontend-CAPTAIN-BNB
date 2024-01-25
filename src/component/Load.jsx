import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from '../assets/image/loader.gif';
import Layout from '../Layout';

const Load = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Navigate to your signup page after loading (adjust the path as needed)
    //   navigate('/lay');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <div className='bg-slate-200 dark:bg-slate-200 h-screen w-full absolute'>
        <img id='img'
          src={loader}
          alt="Loading..."
          style={{ display: 'block', margin: '0 auto', width: '250px', height: '250px', marginTop:'200px' }}
        />
      </div>
      ) : (
        <div>
      
        </div>
      )}
    </div>
  );
};

export default Load;
