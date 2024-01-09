// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/index";
import OrderCard from '../OrderCard/index';
import "./styles.css";

export default function CheckoutSideMenu() {
	const context = useContext(ShoppingCartContext);

	return (
		<aside
			className={`${
				context.isCheckoutSideMenuOpen ? "flex" : "hidden"
			} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">MyOrder</h2>
				<div>
					<XMarkIcon
						className="h-6 w-6 text-black cursor-pointer"
						onClick={() => context.closeCheckoutSideMenu()}
					></XMarkIcon>
				</div>
			</div>
			{
				context.cartProducts.map(product => (
					<OrderCard
						key={product.id}
						title={product.title}
						imageUrl={product.images}
						price={product.price}
					/>
					))
			}
		</aside>
	);
}
