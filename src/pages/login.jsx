import React from 'react';
import './SignInSection.css';

const Login = ({ singinwithgoogle }) => {
  return (
    <div className="bodysection">
      <div className="sign-in-section">
      <h1 className="sign-in-section__title">Sign in with Google account</h1>
      <button className="sign-in-section__button" onClick={singinwithgoogle}>
        Sign in with Google
      </button>
    </div>
    </div>
  );
};

export default Login;