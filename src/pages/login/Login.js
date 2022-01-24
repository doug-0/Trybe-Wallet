import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser as loginUserAction } from '../../actions/index';
import illustration from '../../img/cryptocurrency.svg';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.changePassWord = this.changePassWord.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.checkBtn = this.checkBtn.bind(this);

    this.state = {
      emailUser: '',
      passWordUser: '',
      passwordValidation: '',
      emailValidation: '',
    };
  }

  changePassWord(input) {
    const FIVE = 5;
    this.setState({ passWordUser: input.target.value });
    const { passWordUser } = this.state;
    const result = passWordUser.length >= FIVE;
    this.setState({ passwordValidation: result });
  }

  changeEmail(input) {
    this.setState({ emailUser: input.target.value });
    const regexEmail = /\S+@\S+\.\S+/;
    const { emailUser } = this.state;
    const result = regexEmail.test(emailUser);
    this.setState({ emailValidation: result });
  }

  checkBtn() {
    const { passwordValidation, emailValidation } = this.state;
    return !(passwordValidation && emailValidation);
  }

  render() {
    const { loginUser } = this.props;
    const { emailUser } = this.state;
    return (
      <div className="login-page">
        <form className="form-login">
          <h2>TrybeWallet</h2>
          <h4>Login</h4>
          <div className="form-login-email-input">
            <input
              className="input-email-login"
              data-testid="email-input"
              type="email"
              placeholder="seuemail@email.com"
              onChange={ this.changeEmail }
            />
          </div>
          <div className="form-login-password-input">
            <input
              className="input-password-login"
              data-testid="password-input"
              type="password"
              placeholder="sua senha..."
              onChange={ this.changePassWord }
            />
          </div>
          <div className="form-login-button">
            <Link to="/carteira">
              <button
                className="button-form-login"
                type="submit"
                disabled={ this.checkBtn() }
                onClick={ () => loginUser(emailUser) }
              >
                Entrar
              </button>
            </Link>
          </div>
        </form>
        <img
          className="img-page-login"
          src={ illustration }
          alt="page-illustration"
          width="850px"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (emailUser) => dispatch(loginUserAction(emailUser)),
});

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
