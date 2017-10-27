import React, { Component } from "react";
import { connect } from "react-redux";
import { addRewards, getRewards } from "../actions";
import Loaders from "./Loaders";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rewardInput: 0
    };
  }
  componentWillMount() {
    this.props.getRewards(() => {
      this.props.history.replace("/login");
    });
  }
  render() {
    const email = localStorage.getItem("email");
    return (
      <div className="center">
        <h1>Dashboard</h1>
        <h4>Hey,{email}!!!</h4>
        <button
          className="btn btn-info btn-lg"
          onClick={() => {
            localStorage.removeItem("token");
            this.props.history.replace("/login");
          }}
        >
          Logout
        </button>
        <div className="outer">
          <div className="middle">
            <div className="inner">
              {this.props.isLoading ? (
                <Loaders />
              ) : (
                <div>
                  <h1>Rewards:{this.props.rewards.reward}</h1>
                  <div className="input-group m-b">
                    <input
                      type="number"
                      className="form-control"
                      onChange={event => {
                        if (event.target.value < 101) {
                          this.setState({ rewardInput: event.target.value });
                        }
                      }}
                      value={this.state.rewardInput}
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-info"
                        onClick={() => {
                          this.props.addRewards(this.state.rewardInput);
                        }}
                      >
                        Add Reward
                      </button>
                    </span>
                  </div>
                  <p>
                    <em>
                      <strong>Note:</strong>You can enter only maximum of 100
                      rewards every time of adding
                    </em>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { rewards, isLoading } = state.dashboard;
  return {
    rewards,
    isLoading
  };
};
export default connect(mapStateToProps, { getRewards, addRewards })(Dashboard);
