import React, { useState, useEffect } from "react";
import { CARS, Car } from "../data/Car";
import CarListItemComponent from "./CarListItemComponent";
import "./CarListItemComponent.css";

const CarListComponent: React.FC = () => {
  //useState
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<Car[]>(CARS);

  //store
  // useEffect(() => {
  //   const json = localStorage.getItem("results");
  //   const loadedResults = json !== null ? JSON.parse(json) : {};
  //   if (loadedResults) {
  //     setResults(loadedResults);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("results", JSON.stringify(results));
  // }, [results]);

  //edit car price
  const handleSaveCallback = (carToBeEdited: Car, price: string) => {
    //somewhat checks if the number is NaN or very large or not
    if (isNaN(parseFloat(price)) && price !== "") {
      alert("Please enter a number");
      return;
    } else if (parseFloat(price) > 1e10) {
      alert("Please enter a reasonable price");
      return;
    } else if (price !== "") {
      const newCarList = [...CARS].map((car) => {
        if (car === carToBeEdited) {
          car.pricePerDay = parseFloat(price);
        }
        return car;
      });
      searchTerm !== "" ? searchHandler() : setResults(newCarList);
    }
  };
  //delete car item
  const handleDeleteCallback = (carToBeDeleted: Car) => {
    let index = CARS.findIndex((car) => car.name === carToBeDeleted.name);
    CARS.splice(index, 1);
    searchTerm !== "" ? searchHandler() : setResults([...CARS]);
  };
  //generate car list
  const generateCarList = (cars: Car[]) => {
    return cars.map((car) => (
      <CarListItemComponent
        key={car.name}
        carObj={car}
        saveCallBack={handleSaveCallback}
        deleteCallBack={handleDeleteCallback}
      ></CarListItemComponent>
    ));
  };

  //searchButtonHandler
  const searchHandler = () => {
    if (searchTerm !== "") {
      const newCarList = CARS.filter((car) => {
        if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return car;
        }
      });
      setResults(newCarList);
    } else {
      setResults(CARS);
    }
  };

  //return
  return (
    <div className="container">
      <span>
        <input
          className="searchTextBox"
          name="searchTextBox"
          id="sTB"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
            if (event.target.value === "") {
              setResults(CARS);
            }
          }}
        ></input>
        <input
          className="buttonStyle"
          name="searchButton"
          id="sB"
          type="submit"
          value="Search"
          onClick={searchHandler}
        ></input>
      </span>
      <div>{generateCarList(results)}</div>
    </div>
  );
};

export default CarListComponent;
