import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./resList";


/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard   
 *      - Img
 *      - Name of res, Star Rating, Cuisine, Delivery Time 
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */
const Header = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img 
             className="logo" 
             src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" 
             />
        </div>
        <div className="nav-items">
           <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className="res-logo"
                alt="res-logo"
                src="https://b.zmtcdn.com/data/pictures/0/18703910/fe1a862fa75a40f66cb7ceeb40ed620d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>⭐ {avgRating}</h4>
            <h4>₹{costForTwo / 100} for two</h4>
            <h4>⏱ {deliveryTime} minutes</h4>
        </div>
    );
};

// not using keys (not acceptable) <<<<< index as key <<<< unique id (best practice)

const Body = () => {
return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        </div>
    </div>
);
};



// const Footer = () => {
//     return (
//     <div className="footer">
//          <div className="copyright">
//             <h4>© 2025 Foodie. All rights reserved.</h4>
//          </div>
//          <div className="socialLinks">
//             <ul>
//                 <li>Privacy Policy</li>
//                 <li>Terms of Use</li>
//                 <li>Contact Us</li>
//             </ul>
//          </div>
//     </div>
//     );
// }; 

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
};

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);