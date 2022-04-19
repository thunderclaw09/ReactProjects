import React from "react";

function Hello(){


    const sayHello = () => {
        console.log('Ello!');
      }

    return(
        <div>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}

export default Hello;