import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS object => HTMLElement(render)

// JSX => JSX is a syntax extension for JavaScript that looks like HTML.

// JSX (transpiled before it reaches the JavaScrit Engine) - transpiled is done by PARCEL - Babel(Its a JS package which convert the code that React or browser can understand.)

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)


// React Element
const heading = (
<h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
    </h1>
    );

const Title = () => (
<h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
    <title />
    </h1>
    );


// React Component 
// Class based Component - OLD - No body used in modern React
// Functional based Component- NEW


// Functional based Component

const HeadingComponent = () => (
    <div id = "container">
        {Title()}
        <Title/ >
        <Title></Title>
      <h1 className="heading">Namaste React Functional Component</h1>
 </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);

    