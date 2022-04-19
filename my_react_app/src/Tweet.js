import React, {useState} from "react";
import "./App.css";

function Tweet(props){

    const [RealName, NameThatCanChangeThisValue] = useState(0)
    
    const IncrementNum = () => {
        NameThatCanChangeThisValue(RealName+ 1);
    }

    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>This is a random tweet.</p>
            <h3>Number of likes.</h3>
            <button onClick={IncrementNum}>Increment</button>
            <h1>{RealName}</h1>
        </div>
    )
}

export default Tweet;