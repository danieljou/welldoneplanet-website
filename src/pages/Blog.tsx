/** @format */

import { useState } from "react";
import { images } from "../constants/images";

export const Blog = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	const handleImageError = () => {
		setIsLoading(false);
		// Handle image loading error if needed
	};
	return (
		<div className="">
			{isLoading && (
				<p className="bg-slate-400 h-[500px] w-full animate-pulse"></p>
			)}

			<img
				onLoad={handleImageLoad}
				onError={handleImageError}
				style={{ display: isLoading ? "none" : "block" }}
				src={images.soon}
				className="max-h-[500px] m-auto"
			/>
		</div>
	);
};
