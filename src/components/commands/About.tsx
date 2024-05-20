import React, { useEffect, useState } from "react";

export default function About() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Education:</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
				 - I am currently a second year student at <span className="font-bold">West University of Timisoara</span>. 
				 I study <span className="font-bold">Computer Science in English</span> and I have a strong passion 
				 for problem solving and writing code.
			</p>
			<p className="text-lg mb-3 animate-reveal-0.5">
				 - I graduated highschool from <span className="font-bold">Liceul Teoretic Grigore Moisil Timisoara</span>,
				 studying <span className="font-bold">Mathematics and Informatics</span>.
			</p>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				My Hobbies:
			</h1>
			<p className="text-lg mb-3 animate-reveal-0.7">
				 - In my free time, I enjoy listening to music, playing football and going to the gym.
			</p>
			<p className="text-lg mb-3 animate-reveal-0.7">
				 - I am a really active person, always doing one thing or another, never just sitting around
				 waiting for time to pass by.
			</p>
		</div>
	);
}
