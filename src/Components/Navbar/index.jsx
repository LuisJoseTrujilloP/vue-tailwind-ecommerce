// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import carIcon from "../../assets/shopping.svg";

export default function Navbar() {
	const context = useContext(ShoppingCartContext);
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
						onClick={() => context.setSearchByCategory('clothes')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Electronics"
						onClick={() => context.setSearchByCategory('electronics')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Furnitures"
						onClick={() => context.setSearchByCategory('furnitures')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Toys"
						onClick={() => context.setSearchByCategory('toys')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Others"
						onClick={() => context.setSearchByCategory('others')}
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
						to="/my-orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Order
					</NavLink>
				</li>
				{/* <li>
					<NavLink
						to="/orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Orders
					</NavLink>
				</li> */}
				<li>
					<NavLink to="/car" className="flex items-center">
						<img src={carIcon} alt="carIcon" className="w-5 h-5" />
						{context.count}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
