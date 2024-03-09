/** @format */

import { images } from "./images";

export interface TeamMemberInterface {
	name: string;
	rule: string;
	qualification: string;
	comment: string;
	facebook?: string;
	twitter?: string;
	linkedin?: string;
	github?: string;
	image?: string;
}

export const TeamMemberList: TeamMemberInterface[] = [
	{
		name: "Gabriel BOM",
		qualification: "Digital marketer",
		rule: "CDB & Founder",
		comment: "",
		facebook: "",
		github: "",
		linkedin: "",
		twitter: "",
		image: images.gabi,
	},
	{
		name: "Daniel TIOMELA",
		qualification: "Fullstack developer",
		rule: "CEO & Co-Founder",
		comment: "",
		facebook: "",
		github: "",
		linkedin: "",
		twitter: "",
		image: images.daniel,
	},
	{
		name: "Edson KANOU",
		qualification: "IA & IoT developer",
		rule: "CTO",
		comment: "",
		facebook: "",
		github: "",
		linkedin: "",
		twitter: "",
	},
	{
		name: "Kessy DONGUEU",
		qualification: "Sofware Engineer",
		rule: "CMO & CFO",
		comment: "",
		facebook: "",
		github: "",
		linkedin: "",
		twitter: "",
		image: images.kessy,
	},
];
