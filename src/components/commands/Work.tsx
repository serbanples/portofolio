import React, { useEffect, useState } from "react";
import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";

export default function Work() {
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
		</div>
	);
}
