/** @format */

import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { images } from "../constants/images";

const Footer = () => {
	return (
		<footer className="bg-white dark:bg-gray-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<Link to="/" className="flex items-center">
							<img src={images.logo} className="h-8 me-3" alt="FlowBite Logo" />
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Ressources
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link to="/services" className="hover:underline">
										Services
									</Link>
								</li>
								<li>
									<Link to="/contacts" className="hover:underline">
										Contacts
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Suivez-nous
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<a
										href="https://www.facebook.com/profile.php?id=61554383223411&mibextid=ZbWKwL"
										target="_blank"
										className="hover:underline ">
										Facebook
									</a>
								</li>
								<li>
									<a
										href="https://wa.link/61sdwr"
										target="_blank"
										className="hover:underline">
										WhatsApp
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Legal
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Police &amp; confidentialité
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Termes &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2024
						<a href="https:welldoneplanet.com/" className="hover:underline">
							{" "}
							Welldone Planet™
						</a>
						. Tous droit reservé.
					</span>
					<div className="flex mt-4 sm:justify-center sm:mt-0">
						<a
							href="https://www.facebook.com/profile.php?id=61554383223411&mibextid=ZbWKwL"
							target="_blank"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<BsFacebook />
							<span className="sr-only">Facebook page</span>
						</a>
						<a
							href="https://www.instagram.com/welldoneplanet/"
							target="_blank"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
							<BsInstagram />
							<span className="sr-only">Instagram</span>
						</a>
						<a
							href="https://twitter.com/welldoneplanet"
							target="_blank"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
							<BsTwitterX />
							<span className="sr-only">Twitter page</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
