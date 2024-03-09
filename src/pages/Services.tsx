/** @format */

"use client";
import ServiceItem from "../components/utilities/ServiceItem";
import { images } from "../constants/images";
// import { service
// import Image from "next/image";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { serciceItem2 } from "../constants/interfaces";

const Sercices = () => {
	const { t } = useTranslation();
	const services = t("own_services", { returnObjects: true }) as serciceItem2[];
	return (
		<div>
			{/* <div className="px-[6.5%] w-full py-14 dark:bg-slate-900 bg-white">
				<h1 className="dark:text-white text-[42px]">
					Qu &apos; est-ce que Contour Whash
				</h1>
				<div className="flex justify-center flex-wrap md:flex-nowrap items-center lg:overflow-hidden lg:h-[450px]">
					<Image src={images.dar} alt="" className="" />
					<div className="flex flex-col gap-y-5 mr-5">
						<div className="undefined undefined">
							<h1 className="text-[24px] font-medium mb-2 dark:text-white">
								Avancer
							</h1>
							<p className="text-[16px] text-gray-500">
								Favoriser l &apos; accessibilité à l &apos; éducation en matière
								de cryptomonnaies et à l &apos; innovation Web3.
							</p>
						</div>
						<div className="undefined undefined">
							<h1 className="text-[24px] font-medium mb-2 dark:text-white">
								Faciliter
							</h1>
							<p className="text-[16px] text-gray-500">
								Faciliter les opportunités professionnelles en soutenant les
								personnes talentueuses, en mettant l &apos; accent sur les
								communautés sous-représentées et défavorisées.
							</p>
						</div>
						<div className="undefined undefined">
							<h1 className="text-[24px] font-medium mb-2 dark:text-white">
								Investir
							</h1>
							<p className="text-[16px] text-gray-500">
								Investir dans la recherche de classe mondiale, en mettant l
								&apos; accent sur l &apos; innovation sociale Web3 et les
								solutions ayant un impact positif sur la société.
							</p>
						</div>
					</div>
				</div>
			</div> */}
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
						<h1 className="max-w-2xl mb-4 text-4xl font-bold  tracking-tight leading-10 md:text-5xl xl:text-6xl dark:text-white">
							{t("about_wp")}
						</h1>
						<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
							{t("persuasion")}
						</p>
						<a
							href="#"
							className="my-11 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  bg-orange-400 text-white rounded-full">
							{t("contacts_us")}
						</a>
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							scale: 0,
							translateY: 70,
						}}
						animate={{
							opacity: 1,
							scale: 1,
							translateY: 0,
						}}
						className="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<img src={images.dev} alt="Image" draggable />
						{/* <img
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
							alt="mockup"
						/> */}
					</motion.div>
				</div>
			</section>
			<div className="p-11 bg-gray-200/50 dark:bg-slate-900">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
					{services.map((item, index) => (
						<motion.div
							key={index}
							initial={{
								scale: 0,
							}}
							whileInView={{
								scale: 1,
								opacity: 1,
							}}
							transition={{ duration: 1 * (1 / (index + 2)) }}>
							<ServiceItem {...item} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sercices;
