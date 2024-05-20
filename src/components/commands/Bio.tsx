import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/serbanples",
			text: "@serbanples",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "www.linkedin.com/in/ples-serban-142289295",
			text: "@Serbanples",
		}
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="/profile.jpeg"
					alt="Serban Ples"
					className="w-40 h-40 rounded-full border-2 border-yellow-200 object-cover"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Serban Ples</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">21 year old future sofware developer</p>
				</div>
			</div>
			<p>
				Hi there, I am a computer science student, passionate about web
				development and artificial intelligence. I like to learn new stuff,
				always trying to get better.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
