/** @format */

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { setTheme } from "../store/slices/ThemeSlice";
// import { setTheme } from "../store/slices/ThemeSlice";

const Website = () => {
	const theme = useAppSelector((state) => state.ThemeSlice);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const localStorageTheme = localStorage.getItem("theme");
		if (localStorageTheme) {
			const val = JSON.parse(localStorageTheme);
			if (val && (val == "dark" || val == "light")) {
				dispatch(setTheme(val));
				console.log(val);
			}
		}
	}, []);
	return (
		<div className={`relative ${theme === "dark" ? "dark" : ""}`}>
			<Header />
			<div className="overflow-x-hidden">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Website;
