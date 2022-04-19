(19 April 2022)

**INTRODUCTION**

App.js is a component. It holds the logic, HTML and even styling in one file. It's a self-contained piece of code.

The first thing that you want to do is to import React from react. See the App.js file at the top to see what I mean.
We can create a component by writing a function. You can return a div of HTML in that function.

Finally, at the end, you export that app. "export default App;" with the name of "App" replaced by the name of your function/component. 

In index.js you can see that they use the ReactDOM to render the component, which is used with the name of your JavaSciprt App file.

This app writes the html in the javascript instead of having css and html. Normally, you would not be able to use divs inside of functions, but that's why we have to import React at the beginning. It's not actually HTML, it's JavaScript. (Actually called JSX.)

If you want to add additional logic, you can do it before the return statement, or above the return statment as it's parent thing.

In the onClick attribute thing of a button in the JavaScript file, you can now use curly braces like in the App.js file to run a function, instead of having to reference it like in regular JavaScript. NOTE that it needs to have curly brackets to be recognized as JavaScript.

You can create another file in the src folder (it has to be in that folder.) Import react as usual, from the node modules, like mentioned before. Export it at the end. However, since you are doing it on another file not mentioned in the package.json, simply import Hello in the App.js file: "import myComponent from './sayHello';"
NOTE that "sayHello" is the name of your function/component.
Then, in the div of App.js, do this:
"\<myComponent />"

**CREATING A TWEET-LIKE THING IN TWEET.JS**

You can go to App.css and create a .tweet class. In this, you can do borders and such.

Now, to add this class to the div, you use the "className" attribute. "className='tweet'"
In regular css/html this would be class, but right now we are in JavaScript.

Import the styles at the top. *import "./App.css";*

If you want multiple instances of a component, just do it multiple times. 

But what if you want to define custom parts of each tweet? You can define a *prop.* This is a property we can define on each individual component: "\<Tweet name="Poutou">"

Now, in the parentheses of the Tweet function, you can add a props paramenter (spelled like that.) To access it in the div, write "{props.name}" within the h3 or something parameters, as if it were regular text to be displayed.

You can do this for any more properties that you want.

If you are tired of writing "props.somethinghere", you can do this instead: 

Example:
```javascript
function Tweet({name, message}){
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of likes.</h3>
        </div>
    )
}
```


**STATES**

When using states, you must import {useState} from react as well. 

```javascript
import React, {useState} from "react";
```

Now you can use the useState() function in your function, like this: 

```javascript
const [RealName, NameThatCanChangeThisValue] = useState(0)
```

NOTE that 0 could be any data type, as far as I know, and even objects (classes).

Now you can use this in a button, for example: 

```javascript
const IncrementNum = () => {
    NameThatCanChangeThisValue(RealName+ 1);
}

return(
    <div>
        <button onClick={IncrementNum}>Increment</button>
        <h1>{RealName}</h1>
    </div>   
)
```

Now you can actively change the content on a website.
