import React from "react";
import Player from "./player";
import SetName from "./setName";

class GameAdmin extends React.Component {
  state = {
    playerCounter: [
      { id: 1, value: 0, text: "One", isPlaying: false },
      { id: 2, value: 0, text: "Two", isPlaying: false },
    ],
    nameCounter: [
      { id: 3, text: "One", name: " " },
      { id: 4, text: "Two", name: " " },
    ],
  };
  handleChange = (event, counterObj) => {
    const nameCounter = [...this.state.nameCounter];
    const index = nameCounter.indexOf(counterObj);
    nameCounter[index] = { ...counterObj };
    nameCounter[index].name = event.target.value;
    this.setState({ nameCounter });
  };
  handleOnClick = (counterObj) => {
    const playerCounter = [...this.state.playerCounter];
    const index = playerCounter.indexOf(counterObj);
    playerCounter[index] = { ...counterObj };
    //handle increment
    if (playerCounter[index].isPlaying === false) {
      playerCounter[index].value++;
    }
    //handle disabling/activation
    if (index === 0) {
      playerCounter[index + 1].isPlaying = false;
    } else {
      playerCounter[index - 1].isPlaying = false;
    }
    playerCounter[index].isPlaying = true;
    this.setState({ playerCounter });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.playerCounter.map((count) => (
          <Player
            key={count.id}
            counterObj={count}
            name={this.state.nameCounter[count.id - 1].name}
            handleOnClick={this.handleOnClick}
          />
        ))}
        <hr className="hrStyle" />
        {this.state.nameCounter.map((count) => (
          <SetName
            key={count.id}
            counterObj={count}
            onChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default GameAdmin;
