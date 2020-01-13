import React from 'react';
import { Link } from 'react-router-dom';
import SplashImageNoText from '../splash-content/splash_image/splash-image-no-text';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
    return(
      <div className="centering-div">
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
      </div>
    );
  }}

  render() {
    return (
      <div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <div className="login-form">
              <div className="centering-div">
                <label>
                  <input type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className = "input-text"
                  />
                </label>
                <br/>
                <label>
                  <input type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className = "input-text"
                  />
                </label>
                <br/>
                <label>
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className = "input-text"
                  />
                </label>
                <br/>
                <br/>
                <p>
                  By clicking "Sign Me Up you agree to our Terms and to our Privacy Statement."
                </p>
                {this.renderErrors()}
                <br/>
                <input className="session-submit" type="submit" value="Sign Me Up!" />
                <br/>
                <p>
                  Already a member? 
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <SplashImageNoText />
      </div>
    );
  }
}

export default SignupForm;
