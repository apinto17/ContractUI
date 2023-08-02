import {createElement} from "react";
import "../App.css";

export const Element = (props) => {
    var childrenNodes = []
    props.text.forEach(element => {
        if(!element.bold && !element.underline) {
            childrenNodes.push(element.text)
        }
        else if(element.bold && !element.underline) {
            childrenNodes.push(
                createElement('b', {}, element.text)
            )
        }
        else if(element.bold && element.underline) {
            childrenNodes.push(
                createElement('b', {}, createElement(
                    'u', {}, element.text
                ))
            )
        }
    });
    return createElement(props.element, {}, childrenNodes)
};