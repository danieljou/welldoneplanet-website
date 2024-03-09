/** @format */

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "../i18n";
import AppRouter from "./utils/AppRouter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
	const { i18n } = useTranslation();
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
	useEffect(() => {
		const l = localStorage.getItem("lang");
		console.log("Language ", l);
		if (l) {
			if (l == "en" || l == "fr") {
				changeLanguage(l);
			}
		}
	}, []);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
