import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
      // email: 'demo@email.com',
    }, () => this.props.processForm(this.state)
      .then(this.props.history.push('/')));
    // const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    // return (() => this.props.processForm(this.state)
    //   .then(this.props.history.push('/')));
      // debugger
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <button className="login-demo-user" onClick={this.demoLogin}>Demo User</button>
            <br/>
            <p>
              -------------------- OR --------------------
            </p>
            <br/>
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <input className="session-submit" type="submit" value="Login" />
            <br/>
            <p>
              New to iCook? 
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
