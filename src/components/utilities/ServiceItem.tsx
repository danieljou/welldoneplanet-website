/** @format */

import React from "react";
import { serciceItem2 } from "../../constants/interfaces";
import { oawn_services_images } from "../../constants/services";
import ImageLoading from "../ImageLoading";

const ServiceItem: React.FC<serciceItem2> = ({ title, description, image }) => {
	const LocalIcon =
		oawn_services_images[image as keyof typeof oawn_services_images];
	return (
		<div className="block overflow-hidden h-full">
			<div className="overflow-hidden h-[200px] rounded">
				<ImageLoading image={LocalIcon} />
				{/* <img
					src={LocalIcon}
					alt=""
					className="object-cover w-full h-full bg-white"
				/> */}
			</div>
			<div className="dark:text-white dark:shadow-none dark:bg-gray-700 p-5 bg-white shadow-lg shadow-gray-200/70 basis-[40%] h-full">
				<h1 className="font-semibold text-lg mb-2">{title}</h1>
				<p className="mb-2 text-gray-500 text-sm dark:text-white">
					{description}
				</p>
			</div>
		</div>
	);
};

export default ServiceItem;
