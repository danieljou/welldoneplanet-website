/** @format */

import { useTranslation } from "react-i18next";
import TeamPerson from "../components/TeamPerson";
import { TeamMemberList } from "../constants/teamMembers";
import { motion } from "framer-motion";
const Team = () => {
	const { t } = useTranslation();
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
				<div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						{t("our_team")}
					</h2>
					{/* <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
						Explore the whole collection of open-source web components and
						elements built with the utility classes from Tailwind
					</p> */}
				</div>
				<div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
					{TeamMemberList.map((member, key) => (
						<motion.div
							// initial={{
							// 	// scale: 0,
							// 	// translateX: 45,
							// 	rotateX: 180,
							// }}
							// whileInView={{
							// 	// scale: 1,
							// 	// translateX: 0,
							// 	rotateX: 0,
							// }}
							transition={{ duration: 1 * (1 / (key + 2)) }}
							key={key}>
							<TeamPerson {...member} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;
