/** @format */

"use client";
// import { services } from "@/constants/services";

import { motion } from "framer-motion";
import Services2Item from "./utilities/Services2Item";

import { serciceItem } from "../constants/interfaces";
import { useTranslation } from "react-i18next";

const Services2 = () => {
	const { t } = useTranslation();

	const servicesGood = t("services", { returnObjects: true }) as serciceItem[];

	return (
		<div className="-z-20 relative ">
			<section className="bg-slate-900 z-0  overflow-hidden">
				<div className="z-0 w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-5"></div>
				<div className="container px-[7%] pt-20 pb-32 mx-auto">
					<h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white">
						{t("univsers")}
					</h1>
					<p className="mt-4  xl:mt-6 text-gray-300">{t("next_uinivers")}</p>
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
						{servicesGood.map((service, key) => (
							<motion.div
								key={key}
								initial={{
									scale: 0,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
								}}
								transition={{ duration: 1 * (1 / (key + 2)) }}>
								<Services2Item
									first={key === 0}
									title={service.title}
									details={service.details}
									Icon={service.Icon}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services2;
