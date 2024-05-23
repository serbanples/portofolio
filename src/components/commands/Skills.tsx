import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiSpring,
	SiNodedotjs,
	SiPostgresql,
	SiMongodb,
	SiFlask,
	SiGit,
	SiDocker
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			text: "Tailwindcss",
		},
		{
			Icon: SiTypescript,
			text: "Typescript",
		},
		{
			Icon: SiExpress,
			text: "Express.js",
		},
		{
			Icon: SiNodedotjs,
			text: "Node.js",
		},
		{
			Icon: SiSpring,
			text: 'Java Spring Boot',
		},
		{
			Icon: SiPostgresql,
			text: 'PostgreSql',
		},
		{
			Icon: SiMongodb,
			text: 'Mongo DB',
		},
		{
			Icon: SiFlask,
			text: 'Flask'
		},
		{
			Icon: SiGit,
			text: 'Git'
		},
		{
			Icon: SiDocker,
			text: 'Docker'
		}
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
