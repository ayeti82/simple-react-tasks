import React from "react";
import "./style.css";

class SetName extends React.Component {
  render() {
    return (
      <div className="textStyle">
        Set Name of Player {this.props.counterObj.text}:
        <input
          type="text"
          className="inputStyle"
          onChange={(event) =>
            this.props.onChange(event, this.props.counterObj)
          }
        ></input>
      </div>
    );
  }
}

export default SetName;
