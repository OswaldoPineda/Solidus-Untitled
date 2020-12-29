import React, {useState, useEffect} from 'react';
import './navigation';
import Menu from './Menu';

const Navigation = () => {
  const [menuClass, setMenuClass] = useState('');
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
    <>
    <Menu extraClass={menuClass} setMenuClass={setMenuClass} />
    <nav className={navClasses}>
      <i className="navigation__icon-menu" onClick={() => setMenuClass('active')} />
      <i className="navigation__icon-logo" />
      <i className="navigation__icon-cart" />
    </nav>
  </>
  );
};

export default Navigation;
