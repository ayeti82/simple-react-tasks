import React from "react";
import "./style.css";

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="textStyle mainTextStyle">
          Player {this.props.counterObj.text}
        </div>
        <div className="textStyle">
          Name:
          <span className="mainTextStyle nameSpace">{this.props.name}</span>
        </div>
        <div className="textStyle">
          Played number of times:
          <span className="textStyle">{this.props.counterObj.value}</span>
          <button
            className="buttonStyle"
            onClick={() => this.props.handleOnClick(this.props.counterObj)}
          >
            {this.props.counterObj.isPlaying
              ? "The user is playing now"
              : "Play"}
          </button>
        </div>
      </div>
    );
  }
}

export default Player;
