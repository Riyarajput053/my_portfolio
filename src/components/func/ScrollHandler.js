import React from 'react';
import {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollHandler = ({ sectionId, path }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (section && isElementInViewport(section)) {
        navigate(path);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate, sectionId, path]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  return null;
};

export default ScrollHandler;
