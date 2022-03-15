import React from 'react';
import coverImage from '../../assets/lemon-tea.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between">
      <h1>Claire Sky</h1>
      <img src={coverImage} alt="lemon tea"></img>
      {props.children}
    </header>
  );
}

export default Header;
