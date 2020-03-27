import React from 'react';
import { Link } from 'react-router-dom';
import SplashImageNoText from '../splash-content/splash_image/splash-image-no-text';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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

  demoLogin(e) {
    e.preventDefault();
    this.setState({
      username: 'demoUser',
      password: 'demodemo',
    }, () => this.props.processForm(this.state)
      .then(this.props.history.push('/')));
  }
  
  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else return null;
  }

  render() {
    return (
      <div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <p>
            </p>
            <div className="login-form">
              <div className="centering-div">
                <button className="login-demo-user" onClick={this.demoLogin}>Demo User</button>
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
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="input-text"
                  />
                </label>
                <label>
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className = "input-text"
                  />
                </label>
                <br/>
                {this.renderErrors()}
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
        <SplashImageNoText />
      </div>
    );
  }
}

export default LoginForm;
