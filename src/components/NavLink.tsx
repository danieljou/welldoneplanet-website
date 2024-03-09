/** @format */

import { linkAttribube } from "../constants/interfaces";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ data }: { data: linkAttribube }) => {
	// const router = useRouter();
	// const { pathname } = router;
	const { pathname } = useLocation();

	return (
		<li className={`my-3 `}>
			<Link
				className={` lock py-2 pr-4 pl-3 text-gray-700   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
					data.link === pathname && " text-orange-500 dark:text-white"
				}`}
				onClick={() => data.setClose(false)}
				to={data.link}>
				{data.title}
			</Link>
		</li>
	);
};

export default NavLink;
