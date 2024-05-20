import React, { useEffect, useState } from "react";
import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {
	const techs = [
		{ Icon: SiReact, color: "text-blue-500", duration: "duration-500" },
		{ Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-700" },
		{ Icon: SiNetlify, color: "text-green-400", duration: "duration-1000" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Work History:</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
				 - I worked six months for Continental Autonomous Mobility Timisoara, from
				July 2023 to January 2024. In my time there i was mostly tasked with
				creating diagrams and writing unit tests.
			</p>
			<p className="text-lg mb-3 animate-reveal-0.5">
				 - I attended The ACLABS laboratory at OPSWAT Timisoara from 04.2024 to 06.2024.
				In the time there, I was tasked with adding a feature to their Chrome extension.
				I learned a lot about working on a big project, and I got to solidify my React.js skills.
			</p>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Personal Projects:
			</h1>
			<p className="text-lg mb-3 animate-reveal-0.7">
				 - I worked in a team on a project for Nokia Timisoara, where we created a full stack
				 web application using React and Flask. This application is for their testers, in order to automate
				 some commands that they had to run multiple times of day. In the future, we hope to make this
				 app in such a way that the employees at Nokia will use our app daily. 
				 <a className="text-gray-500 underline" href="https://github.com/serbanples/Nokia_Cloud_Automation"> Learn more about this.</a>
			</p>
			<p className="text-lg mb-3 animate-reveal-0.7">
				 - I am currently working on a Full Stack application that tracks football player data from
				 the English Premier League. For this project I am almost done with the backend which includes:
				 Rest Api for users, Rest Api for player data, integration with PostgreSQL and a web scraper
				 in order to populate and update my database. The backend is Java SpringBoot and the frontend will
				 be React.js
				 <a className="text-gray-500 underline" href="https://github.com/serbanples/PremierZone"> Learn more.</a>
			</p>
		</div>
	);
}
