/** @format */

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TeamMemberInterface } from "../constants/teamMembers";
import { BsTwitterX } from "react-icons/bs";

const TeamPerson = (person: TeamMemberInterface) => {
	return (
		<div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 h-full">
			<a href="#">
				{person?.image ? (
					<img
						className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
						src={person.image}
						alt="Bonnie Avatar"
					/>
				) : (
					<img
						className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
						alt="Bonnie Avatar"
					/>
				)}
			</a>
			<div className="p-5">
				<h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
					<a href="#">{person.name}</a>
				</h3>
				<span className="text-gray-500 dark:text-gray-400">{person.rule}</span>
				<span className="text-gray-500 dark:text-gray-400">
					{" / " + person.qualification}
				</span>
				<p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
					Bonnie drives the technical strategy of the flowbite platform and
					brand.
				</p>
				<ul className="flex space-x-4 sm:mt-0">
					<li>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaFacebook />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<BsTwitterX />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TeamPerson;
