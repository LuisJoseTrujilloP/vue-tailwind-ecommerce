// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import "./styles.css";
import { totalPrice } from "../../Utils/index";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);

	const handleDelete = (id) => {
		const filteredProducts = context.cartProducts.filter(
			(product) => product.id != id
		);
		context.setCartProducts(filteredProducts);
	};
	const handleCheckout = () => {
		const orderToAdd = {
			date: "01.02.23",
			products: context.cartProducts,
			totalProducts: context.cartProducts,
			totalPrice: totalPrice(context.cartProducts),
		};
		context.setOrder([...context.order, orderToAdd]);
		context.setCartProducts([]);
		// console.log("CART: ", orderToAdd);
	};

	return (
		<aside
			className={`${
				context.isCheckoutSideMenuOpen ? "flex" : "hidden"
			} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<div>
					<XMarkIcon
						className="h-6 w-6 text-black cursor-pointer"
						onClick={() => context.closeCheckoutSideMenu()}
					></XMarkIcon>
				</div>
			</div>
			<div className="px-6 overflow-y-scroll flex-1">
				{context.cartProducts.map((product) => (
					<OrderCard
						id={product.id}
						key={product.id}
						title={product.title}
						imageUrl={product.images}
						price={product.price}
						handleDelete={handleDelete}
					/>
				))}
			</div>
			<div className="px-6 mb-6">
				<p className="flex justify-between items-center mb-6">
					<span className="font-light">Total: </span>
					<span className="font-medium text-xl">
						${totalPrice(context.cartProducts)}
					</span>
				</p>
				<Link></Link>
				<button
					className="bg-black py-3 text-white w-full rounded-lg"
					onClick={() => handleCheckout()}
				>
					Checkout
				</button>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
