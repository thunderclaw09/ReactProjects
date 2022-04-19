import React from "react";
import Tweet from "./Tweet"
// import Hello from "./sayHello";

function App(){
  // const sayHello = () => {
  //   console.log('Ello!');
  // }

  // var counter = 0;

  // const IncrementCounter = () => {
  //   counter = counter + 1;
  // }

  return (
    <div className="App">
      <h1>React Attempt lol</h1>
      {/* <button onClick={IncrementCounter}>{counter}</button> */}
      {/*<button onClick={sayHello}> Say hello! </button> */}

      {/* <Hello /> */}
      <Tweet name="Poutou"/>
      <Tweet name="Lili"/>
      <Tweet name="Cammy"/>
      <Tweet name="Pebby"/>
      


    </div>
  );

}

export default App;