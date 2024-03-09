/** @format */
"use client";
import { useState } from "react";

interface DropdownProps {
	isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeDropdown = () => {
		setIsDropdownOpen(false);
	};

	return (
		<div className="relative inline-block ">
			{/* Dropdown toggle button */}
			<button
				onClick={toggleDropdown}
				className="relative z-40 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
				</svg>
			</button>

			{/* Dropdown menu */}
			{isDropdownOpen && (
				<div
					onBlur={closeDropdown}
					className="absolute right-0 z-50 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
					{/* Dropdown menu items */}
					{/* ... */}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
