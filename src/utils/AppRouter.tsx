/** @format */

import { Route, Routes, useLocation } from "react-router-dom";
import Website from "./Website";
import Sercices from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import { useEffect } from "react";

import { Blog } from "../pages/Blog";

const AppRouter = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<Routes>
			<Route path="" Component={Website}>
				<Route index Component={Home} />
				<Route path="services" Component={Sercices} />
				<Route path="about-us" Component={AboutUs} />
				<Route path="contacts" Component={Contacts} />
				<Route path="blog" Component={Blog} />
				{/* <Route path="*" Component={Error404} /> */}
			</Route>
		</Routes>
	);
};

export default AppRouter;
