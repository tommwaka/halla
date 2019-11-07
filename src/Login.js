import React from 'react';

import './Login.css';

export default function Login(props) {
  return (
    <div className="Login">
      <h1 className="Login__title">Halla</h1>
      <div className="Login__button" onClick={() => login('Tom', 'Keith')}>
        Log in as <b>Tom</b>
      </div>
      <div className="Login__button" onClick={() => login('Keith', 'Tom')}>
        Log in as <b>Keith</b>
      </div>
    </div>
  );
}

function login(userId, otherUserId) {
  window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}
