import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../actions";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    if (localStorage.getItem("token")) {
      this.props.history.replace("/dashboard");
    }
    return (
      <div className="outer App">
        <div className="middle">
          <div className="inner">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form role="form">
                    <div className="form-group">
                      <h1 className="center">Sign Up</h1>
                      {this.props.showErrorMessage ? (
                        <p className="error">{this.props.showErrorMessage}</p>
                      ) : (
                        <div />
                      )}
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={event => {
                          this.setState({ email: event.target.value });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={event => {
                          this.setState({ password: event.target.value });
                        }}
                      />
                    </div>
                  </form>
                  <button
                    className="btn btn-info btn-lg btn-block"
                    onClick={() => {
                      this.props.signUpUser(
                        this.state.email,
                        this.state.password,
                        () => {
                          this.props.history.replace("/dashboard");
                        }
                      );
                    }}
                  >
                    Sign Up
                  </button>
                  <p className="center margin-top-50">
                    Already have an account?
                  </p>
                  <div className="center">
                    <button
                      className="btn btn-success btn-lg center"
                      onClick={() => {
                        this.props.history.goBack();
                      }}
                    >
                      Login Here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { signUpUser })(SignUp);
