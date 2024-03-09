/** @format */

import { IconButton, Popover } from "@mui/material";

import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { setTheme } from "../store/slices/ThemeSlice";
import React from "react";
import { setTheme } from "../store/slices/ThemeSlice";

const ChangeTheme = () => {
	const theme = useAppSelector((state) => state.ThemeSlice);
	const dispatch = useAppDispatch();
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
	return (
		<div>
			<div className="border-gray-500">
				<IconButton
					className="bg-red-500"
					aria-describedby={id}
					onClick={handleClick}>
					{theme == "dark" ? (
						<BiSolidMoon className="dark:text-white " />
					) : (
						<BiSolidSun className="dark:text-white " />
					)}
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
							localStorage.setItem("theme", JSON.stringify("light"));
							dispatch(setTheme("light"));
							handleClose();
						}}
						className="my-2 hover:bg-slate-100 px-7 py-2 flex item-center gap-x-4">
						<div className="div">
							<BiSolidSun className="dark:text-white my-1.5" />
						</div>
						<div>Light</div>
					</button>

					<button
						onClick={() => {
							localStorage.setItem("theme", JSON.stringify("dark"));
							dispatch(setTheme("dark"));
							handleClose();
						}}
						className="my-2 hover:bg-slate-100 px-7 py-2 flex item-center gap-x-4">
						<div className="div">
							<BiSolidMoon className="dark:text-white my-1.5" />
						</div>
						<div>Dark</div>
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

export default ChangeTheme;
