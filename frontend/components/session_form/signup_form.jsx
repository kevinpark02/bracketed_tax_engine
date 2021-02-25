import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.removeSessionErrors();
  }

  handleInput(type) {
      return (e) => {
          this.setState({ [type]: e.target.value })
      };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  renderErrors(){

      const errors = this.props.errors;

      return(
            <ul className="session-errors">
                {errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
      )
   }

  render() {
      const formType = this.props.formType;
      const linkType = "login"
      const otherLinkName = "Have an account already? Please log in"
      const sessionHeading = "Sign up for your account"

      return(
          <div className="session-form">
              <form onSubmit={this.handleSubmit}>
                  <div className="session-form-inputs">
                      {this.renderErrors()}
                        <h4>{sessionHeading}</h4>
            
                        <input type="text"
                                value={this.state.email}
                                placeholder="Enter email"
                                onChange={this.handleInput('email')}
                                className="input-fields"/>

                        <input type="text"
                                value={this.state.fname}
                                placeholder="First Name"
                                onChange={this.handleInput('fname')}
                                className="input-fields"/>

                        <input type="text"
                                value={this.state.lname}
                                placeholder="Last Name"
                                onChange={this.handleInput('lname')}
                                className="input-fields"/>

                        <input type="password"
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={this.handleInput('password')}
                                className="input-fields"/>

                        <input type="submit" value={formType} className ="yellow-btn session-form-btn"/>

                        <Link className="session-form-alt" to={`/${linkType}`}>{otherLinkName}</Link>
                  </div>
              </form>
          </div>
      )
   }
}

export default SignupForm;