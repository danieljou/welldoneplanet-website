/** @format */

import React from "react";
import { serciceItem } from "../../constants/interfaces";

import { ServiceOneIcon } from "../../constants/services";

const Services2Item: React.FC<serciceItem> = ({
	title,
	details,
	Icon,
	first,
}) => {
	const LocalIcon = ServiceOneIcon[Icon];
	return (
		<div className="space-y-3">
			<span
				className={`${
					first
						? "inline-block p-3 rounded-full text-white bg-orange-500"
						: "inline-block p-3 text-orange-500 bg-orange-100 rounded-full  "
				}`}>
				<LocalIcon className="text-2xl" />
			</span>
			<h1 className="text-xl font-semibold capitalize text-white">{title}</h1>
			<p className="text-gray-500 dark:text-gray-300">{details}</p>
			{/* <a
				href="#1"
				className="inline-flex items-center -mx-1 text-sm text-orange-500 capitalize transition-colors duration-300 transform dark:text-red-400 hover:underline hover:text-red-600 dark:hover:text-red-500">
				<span className="mx-1">Voir plus</span>
			</a> */}
		</div>
	);
};

export default Services2Item;
