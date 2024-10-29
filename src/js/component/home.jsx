import React from "react";
import { Timer } from "./Timer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Timer />
		</div>
	);
};

export default Home;
