import React, {useState, useEffect} from 'react';
import './navigation';

const Navigation = () => {
  const [isOnTopClass, setIsOnTopClass] = useState('is-on-top');
  const navClasses = `navigation ${isOnTopClass}`;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const isOnTop = (window.pageYOffset < 30);
    const topClass = isOnTop ? 'is-on-top' : '';
    setIsOnTopClass(topClass);
  };

  return (
    <nav className={navClasses}>
      <i className="navigation__icon-menu" />
      <i className="navigation__icon-logo" />
      <i className="navigation__icon-cart" />
    </nav>
  );
};

export default Navigation;
