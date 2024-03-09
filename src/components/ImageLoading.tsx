/** @format */

import { useState } from "react";

const ImageLoading = ({ image }: { image: string }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	const handleImageError = () => {
		// setIsLoading(false);
		setIsError(true);
		// Handle image loading error if needed
	};
	return (
		<div className="h-full w-full">
			{isLoading && (
				<p className="bg-slate-400 h-[500px] w-full animate-pulse"></p>
			)}
			{isError && (
				<p className="bg-slate-400 h-[500px] w-full animate-pulse flex justify-center items-center">
					Can'nt load
				</p>
			)}

			<img
				onLoad={handleImageLoad}
				onError={handleImageError}
				style={{ display: isLoading ? "none" : "block" }}
				src={image}
				className="h-full w-full"
			/>
		</div>
	);
};

export default ImageLoading;
