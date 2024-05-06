// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context/index";
import OrdersCard from "../../Components/OrdersCard/index";
import { Link } from "react-router-dom";

export default function MyOrders() {
	const context = useContext(ShoppingCartContext);
	return (
		<Layout>
			<div className="flex w-80 items-center relative justify-center mb-6">
				<h1 className='font-medium text-xl'>My Orders</h1>
			</div>
			{context.order.map((order, index) => (
				<Link key={index} to={`/my-orders/${index}`}>
					<OrdersCard
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</Layout>
	);
}
