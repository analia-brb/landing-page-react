import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (<><Navbar/>
	<Jumbotron/>
	<Card/>
	</>);
};

export default Home;
