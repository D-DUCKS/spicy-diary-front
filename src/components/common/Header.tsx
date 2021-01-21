import React from 'react';
import Logo from 'images/logo.png';
import Character from 'images/dducks_character.png';
import Account from 'images/account.png';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="character">
        <img src={Character} />
      </div>
      <div className="account">
        <img src={Account} />
      </div>
    </div>
  );
};

export default Header;
