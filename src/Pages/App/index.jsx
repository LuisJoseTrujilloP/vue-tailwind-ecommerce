// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home/index";
import Account from "../Account/index";
import Order from "../Order/index";
import Orders from "../Orders/index";
import SingIn from "../SingIn/index";
import NotFound from "../NotFound/index";
import Navbar from "../../Components/Navbar";

const AppRoutes = () => {
	let routes = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/account",
			element: <Account />,
		},
		{
			path: "/order",
			element: <Order />,
		},
		{
			path: "/orders",
			element: <Orders />,
		},
		{
			path: "/sing-in",
			element: <SingIn />,
		},
		{
			path: "/*",
			element: <NotFound />,
		},
	]);
	return routes;
};

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<AppRoutes />
		</BrowserRouter>
	);
}
