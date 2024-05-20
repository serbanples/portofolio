import React, { useEffect, useState } from "react";

export default function Projects() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Personal Projects:
			</h1>
			<p className="text-lg mb-3 animate-reveal-0.7">
				 - I worked in a team on a project for Nokia Timisoara, where we created a full stack
				 web application using React and Flask. This application is for their testers, in order to automate
				 some commands that they had to run multiple times of day. In the future, we hope to make this
				 app in such a way that the employees at Nokia will use our app daily. 
				 <a className="text-gray-500 underline" href="https://github.com/serbanples/Nokia_Cloud_Automation"> Learn more.</a>
			</p>
			<p className="text-lg mb-3 animate-reveal-0.7">
				 - I am currently working on a Full Stack application that tracks football player data from
				 the English Premier League. For this project I am almost done with the backend which includes:
				 Rest Api for users, Rest Api for player data, integration with PostgreSQL and a web scraper
				 in order to populate and update my database. The backend is Java SpringBoot and the frontend will
				 be React.js
				 <a className="text-gray-500 underline" href="https://github.com/serbanples/PremierZone"> Learn more.</a>
			</p>
            <p className="text-lg mb-3 animate-reveal-0.7">
                For more projects, visit my <a className="text-gray-500 underline" href="https://github.com/serbanples">GitHub profile</a>.
            </p>
		</div>
	);
}
