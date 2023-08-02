import React from "react";
import "../App.css";
import { inputData } from "../input";
import { Element } from "./Element";

export const Title = () => {
  var title = inputData[0]["children"][0];
  return (
    <>
      <div className="title-container">
        <Element element={title["type"]} text={title["children"]}></Element>
      </div>
    </>
  );
};