/** @format */
import { motion } from "framer-motion";
import { images } from "../constants/images";
import Services2 from "../components/Services2";
import { useTranslation } from "react-i18next";
const Home = () => {
	const { t } = useTranslation();
	return (
		<div className="">
			<section className=" bg-white dark:bg-gray-900">
				<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
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
							{t("splifiez")}
						</h1>
						<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
							{t("home_desc")}
						</p>
					</motion.div>

					<motion.div
						initial={{
							opacity: 0,
							scale: 0,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						className="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<img src={images.undraw} alt="Image" draggable />
						{/* <img
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
							alt="mockup"
						/> */}
					</motion.div>
				</div>
			</section>
			{/* <Services /> */}
			<Services2 />
		</div>
	);
};

export default Home;
