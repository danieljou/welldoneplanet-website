/** @format */

import { IconButton, Popover } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BiGlobe } from "react-icons/bi";
import { images } from "../constants/images";

const ChangeLanguage = () => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		// i18n.changeLanguage(lng);
		i18n.changeLanguage(lng);
	};
	useEffect(() => {
		// i18n.changeLanguage(lang);
	}, []);
	return (
		<div>
			<div className="border-gray-500 ">
				<IconButton
					className="bg-red-500"
					aria-describedby={id}
					onClick={handleClick}>
					<BiGlobe className="dark:text-white " />
				</IconButton>
			</div>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}>
				<div className="dark:bg-slate-900 flex flex-col">
					<button
						onClick={() => {
							localStorage.setItem("lang", "fr");
							changeLanguage("fr");
							handleClose();
						}}
						className="my-2 hover:bg-slate-100 px-7 py-2 flex items-center gap-2">
						<img src={images.france} className="w-7" />
						Français
					</button>
					<button
						onClick={() => {
							localStorage.setItem("lang", "en");
							changeLanguage("en");
							handleClose();
						}}
						className="my-2 hover:bg-slate-100 px-7 py-2 flex items-center gap-2">
						<img src={images.uk} className="w-7" />
						English
					</button>
				</div>
				{/* <div
					className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 z-10 mt-2 min-w-[15rem] bg-white shadow-lg shadow-gray-200/60 dark:shadow-none rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 block"
					aria-labelledby="hs-dropdown-basic"
					data-popper-placement="bottom-end">
					<span className="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
						<span className="flag-icon flag-icon-fr"></span>
						<span className="text-[#FBCD13]">Français</span>
					</span>
					<span className="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
						<span className="flag-icon flag-icon-gb"></span>
						<span className="">English</span>
					</span>
				</div> */}
			</Popover>
		</div>
	);
};

export default ChangeLanguage;
