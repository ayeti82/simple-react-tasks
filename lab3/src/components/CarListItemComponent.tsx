import React, { useState } from "react";
import { Car } from "../data/Car";
import "./CarListItemComponent.css";

const CarListItemComponent: React.FC<{
  carObj: Car;
  saveCallBack: any;
  deleteCallBack: any;
}> = (props: { carObj: Car; saveCallBack: any; deleteCallBack: any }) => {
  const [buttonText, setButtonText] = useState("Edit");
  const [onEditClick, setOnEditClick] = useState("false");
  const [price, setPrice] = useState("");

  return (
    <div className="listItems">
      <span>
        <img
          src={props.carObj.image}
          alt={props.carObj.name}
          className="imageStyle"
        />
        <span className="carNameStyle">{props.carObj.name}</span>
        <span className="carItemStyle">
          {props.carObj.seats} seats
          <hr />
          {props.carObj.doors} doors
          <hr />
          {props.carObj.AC ? "air conditioning" : "no air conditioning"}
        </span>
        <span className="priceContainerStyle">
          &nbsp; Price per day
          <br />
          <span className="priceStyle">
            {buttonText === "Edit" || onEditClick === "false" ? (
              props.carObj.pricePerDay
            ) : (
              <input
                className="priceTextBox"
                type="text"
                defaultValue={props.carObj.pricePerDay.toString()}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              ></input>
            )}
          </span>
          <br />
          <span>
            <input
              className="buttonStyle"
              name="editButton"
              type="submit"
              value={buttonText}
              onClick={() => {
                if (buttonText === "Edit") {
                  setOnEditClick("true");
                  setButtonText("Save");
                } else {
                  setOnEditClick("false");
                  setButtonText("Edit");
                  props.saveCallBack(props.carObj, price);
                }
              }}
            ></input>
            <input
              className="buttonStyle"
              name="deleteButton"
              type="submit"
              value="Delete"
              onClick={props.deleteCallBack.bind(this, props.carObj)}
            ></input>
          </span>
        </span>
      </span>
    </div>
  );
};

export default CarListItemComponent;
