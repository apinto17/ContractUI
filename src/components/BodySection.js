import React from "react";
import "../App.css";
import { inputData } from "../input";
import { Element } from "./Element";
import { Block } from "./Block";
import { Clause } from "./Clause"
import {createElement} from "react";

export const BodySection = () => {
  var bodySection = []
  inputData[0]["children"].slice(1).forEach((element) => {
    if(element.type === "block") {
      bodySection.push(<Block text={element.children}></Block>)
    }
    else if(element.type === "clause") {
      bodySection.push(<Clause text={element.children}></Clause>)
    }
    else {
      bodySection.push(<Element text={element.children}></Element>)
    }
  });
  return createElement("div", {className: "bodySection"}, bodySection)
};