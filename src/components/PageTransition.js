// components/PageTransition.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/transition.css';

const PageTransition = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(to);
    }, 600); // match duration in CSS

    return () => clearTimeout(timeout);
  }, [navigate, to]);

  return <div className="page-transition" />;
};

export default PageTransition;
