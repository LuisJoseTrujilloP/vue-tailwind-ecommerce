// eslint-disable-next-line no-unused-vars
import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function MyOrder() {
	const context = useContext(ShoppingCartContext);
	const currentPath = window.location.pathname;
	const index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
	console.log(index);

	return (
		<Layout>
			<div className="flex w-80 items-center relative justify-center mb-6">
				<Link to={`/my-orders/`} className="absolute left-0">
					<ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
				</Link>
				<h1>MyOrder</h1>
			</div>
			<div className="flex flex-col w-80">
				{context.order?.slice(-1)[0].products.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.images}
						price={product.price}
					/>
				))}
			</div>
		</Layout>
	);
}
