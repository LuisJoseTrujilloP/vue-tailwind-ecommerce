// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
	const activeStyle = "underline";
	return (
		<nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/">Shopi</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Clothes"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Electronics"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Furnitures"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Toys"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Others"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">luisjosetrujillodeveloper@gmail.com</li>
				<li>
					<NavLink
						to="/account"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sing-in"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sing In
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/order"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Order
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/car"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Car
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
