import React, {Component} from "react";

export default function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button> 
    )
}