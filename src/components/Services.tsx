/** @format */

import { serciceItem } from "../constants/interfaces";

import React from "react";

import { motion } from "framer-motion";
import { services } from "../constants/services";

const Services = () => {
	return (
		<section className=" pb-12 pt-20 px-5 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
			<div className="container mx-auto">
				<div className="-mx-4 flex flex-wrap">
					{/* <div className="w-full px-4">
						<div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
							<span className="mb-2 block text-lg font-semibold text-primary">
								Our Services
							</span>
							<h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
								What We Offer
							</h2>
							<p className="text-base text-body-color dark:text-dark-6">
								There are many variations of passages of Lorem Ipsum available
								but the majority have suffered alteration in some form.
							</p>
						</div>
					</div> */}
				</div>

				<div className="grid  grid-cols-1 gap-16 p-2 md:grid-cols-2 xl:grid-cols-3">
					{services.map((service, key) => (
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
							<ServiceCard
								title={service.title}
								details={service.details}
								Icon={service.Icon}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

const ServiceCard: React.FC<serciceItem> = ({ title, details }) => {
	return (
		// <div className="px-4 p-5 h-full">
		<div className="hover:scale-50 h-full shadow-md mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
			<div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
				{/* <Icon className="text-5xl text-orange-500" /> */}
			</div>
			<h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white text-orange-500">
				{title}
			</h4>
			<p className="text-body-color dark:text-dark-6">{details}</p>
		</div>
		// </div>
	);
};
