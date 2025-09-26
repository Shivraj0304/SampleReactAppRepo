import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// not using keys (not acceptable) <<<<< index as key <<<< unique id (best practice)

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
        {/* <Footer /> */}
    </div>
};

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
