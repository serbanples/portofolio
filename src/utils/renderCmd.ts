import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
import Help from "../components/commands/Help";
import NotFound from "../components/commands/NotFound";
import Projects from "../components/commands/Projects";
import Skills from "../components/commands/Skills";
import Work from "../components/commands/Work";
import { CmdHistory } from "../type";

function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "ls":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "bio":
			return {
				cmd,
				Component: Bio,
				time: "",
			};
		case "skill":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "about": {
			return {
				cmd,
				Component: About,
				time: "",
			};
		}
		case "work": {
			return {
				cmd,
				Component: Work,
				time: "",
			};
		}
		case "projects": {
			return {
				cmd,
				Component: Projects,
				time: ""
			}
		}
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;
