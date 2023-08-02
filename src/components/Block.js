import {createElement} from "react";
import "../App.css";
import { Element } from "./Element";

export const Block = (props) => {
    return createElement("div", {}, <Element text={props.text}></Element>)
};