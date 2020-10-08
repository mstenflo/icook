import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { updateObject } from '../../shared/utility';

const SignupForm = props => {

  const [userData, setUserData] = useState('');
  useEffect(() => {
    props.clearErrors();
  }, [])

  const update = (e, field) => {
    const updateData = updateObject(userData, { [field]: e.currentTarget.value });
    setUserData(updateData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.processForm(userData)
      .then(() => window.location.href = '/');
  }

  const renderErrors = () => {
    if (props.errors.length > 0) {
      return (
        <div className="centering-div">
          <ul className="errors">
            {props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
    );
  }}

  return (
    <div className="login-bg">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <div className="centering-div">
              <label>
                <input type="email"
                  placeholder="Email"
                  value={userData.email || ''}
                  onChange={e => update(e, 'email')}
                  className="input-text"
                />
              </label>

              <br/>
              <label>
                <input type="text"
                  placeholder="Username"
                  value={userData.username || ''}
                  onChange={e => update(e, 'username')}
                  className="input-text"
                />
              </label>

              <br/>
              <label>
                <input type="password"
                  placeholder="Password"
                  value={userData.password || ''}
                  onChange={e => update(e, 'password')}
                  className="input-text"
                />
              </label>

              <br/>
              {renderErrors()}
              <br/>
              <input className="session-submit" type="submit" value="Sign Me Up!" />
              <br/>
              <p>
                Already a member? 
                &nbsp;
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
