import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiSpring,
	SiNodedotjs,
	SiPostgresql,
	SiMongodb
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Tailwindcss",
		},
		{
			Icon: SiTypescript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Typescript",
		},
		{
			Icon: SiExpress,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Express.js",
		},
		{
			Icon: SiNodedotjs,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Node.js",
		},
		{
			Icon: SiSpring,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: 'Java Spring Boot',
		},
		{
			Icon: SiPostgresql,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: 'PostgreSql',
		},
		{
			Icon: SiMongodb,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: 'Mongo DB',
		}
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
