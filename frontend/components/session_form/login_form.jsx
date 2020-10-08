import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { updateObject } from '../../shared/utility';

const LoginForm = props => {

  const [userData, setUserData] = useState('');

  useEffect(() => {
    props.clearErrors();
  }, [])

  const update = (e, field) => {
    const udpateData = updateObject(userData, { [field]: e.currentTarget.value });
    setUserData(udpateData);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.processForm(userData)
      .then(() => window.location.href = '/');
  }

  const demoLogin = () => {
    setUserData({
      username: 'demoUser',
      password: 'demodemo',
    });

    handleSubmit();
  }
  
  const renderErrors = () => {
    if (props.errors.length > 0) {
      return (
        <ul className="errors">
          {props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else return null;
  }

  return (
    <div className="login-bg">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <div className="centering-div">
              <button className="login-demo-user" onClick={demoLogin}>Demo User</button>
            </div>
            <br/>
            <span><hr/>&nbsp; OR &nbsp;<hr/></span>
            <br/>
            <br/>
            <div className="centering-div">
              <label>
                <input 
                  type="text"
                  placeholder="Username"
                  value={userData.username || ''}
                  onChange={e => update(e, 'username')}
                  className="input-text"
                />
              </label>
              <label>
                <input type="password"
                  placeholder="Password"
                  value={userData.password || ''}
                  onChange={e => update(e, 'password')}
                  className = "input-text"
                />
              </label>
              <br/>
              {renderErrors()}
              <br/>
              <input className="session-submit" type="submit" value="Login" />
              <p>
                New to iCook? 
                &nbsp;
                <Link to="/signup">Sign Up »</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
