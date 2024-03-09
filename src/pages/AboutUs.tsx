/** @format */

import { useTranslation } from "react-i18next";
import ImageLoading from "../components/ImageLoading";
import { images } from "../constants/images";
import Team from "./Team";
import { motion } from "framer-motion";
import { AboutMsg } from "../constants/interfaces";
const AboutUs = () => {
	const { t } = useTranslation();
	const about_msg = t("about_messages", { returnObjects: true }) as AboutMsg[];
	return (
		<div>
			<section className=" bg-white dark:bg-gray-900">
				<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<motion.div
						initial={{
							opacity: 0,
							scale: 0,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
						<div className="max-w-[300px] flex justify-center">
							<ImageLoading image={images.image2} />
						</div>
						{/* <img
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
							alt="mockup"
						/> */}
					</motion.div>
					<motion.div
						initial={{
							translateX: -400,
							opacity: 0,
							// scale: 0,
						}}
						animate={{
							translateX: 0,
							opacity: 1,
							// scale: 1,
						}}
						transition={{
							duration: 0.5,
						}}
						className="mr-auto place-self-center lg:col-span-7">
						<h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
							{t("pn")}
						</h1>
						<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
							{t("terrain_innovation")}
						</p>
					</motion.div>
				</div>
			</section>
			{/* <Services /> */}

			<div className="px-[6.5%] w-full py-14 dark:bg-slate-900 bg-white">
				<h1 className="dark:text-white text-[42px] font-bold my-7">
					Notre Engagement envers Vous :
				</h1>
				<div className="flex justify-center flex-wrap md:flex-nowrap items-center lg:overflow-hidden lg:h-[450px] gap-16">
					<div className="max-w-[500px]">
						<ImageLoading image={images.image1} />
					</div>
					<div className="flex flex-col gap-y-5 mr-5">
						{about_msg.map((msg, key) => (
							<div key={key} className="undefined undefined">
								<h1 className="text-[24px] font-medium mb-2 dark:text-white">
									{msg.title}
								</h1>
								<p className="text-[16px] text-gray-500">{msg.msg}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<Team />
		</div>
	);
};

export default AboutUs;
