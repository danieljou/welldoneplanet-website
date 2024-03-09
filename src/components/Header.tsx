/** @format */
"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import NavLink from "./NavLink";
import { images } from "../constants/images";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";
import { useTranslation } from "react-i18next";
import { navlink } from "../constants/interfaces";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const { t } = useTranslation();

	const menus = t("menu", { returnObjects: true }) as navlink[];

	return (
		<header className="sticky top-0">
			<nav className="z-[1000] bg-white shadow-lg  border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link to="/" className="flex items-center">
						<img
							src={images.logo}
							className="mr-3  h-6"
							alt="Welldone Planet Logo"
						/>
					</Link>
					<div className="flex items-center lg:order-2 text-2xl">
						<ChangeLanguage />
						<div className="px-2">
							<ChangeTheme />
						</div>
						<button
							onClick={() => setToggle(!toggle)}
							type="button"
							className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
							<span className="sr-only">Open main menu</span>
							{/* <svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"></path>
							</svg> */}
							{!toggle ? (
								<MdMenu className="w-6 h-6" />
							) : (
								<MdClose className="w-6 h-6" />
							)}
						</button>
					</div>
					<div
						className={`${
							toggle ? "block transition-all" : "hidden"
						} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 `}
						id="mobile-menu-2">
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							{menus.map((navLinkItem, key) => {
								return (
									<NavLink
										key={key}
										data={{
											close: toggle,
											link: navLinkItem.path,
											setClose: setToggle,
											title: navLinkItem.title,
										}}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
