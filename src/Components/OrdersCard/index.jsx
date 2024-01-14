// eslint-disable-next-line no-unused-vars
import React from "react";
// import { ShoppingCartContext } from "../../Context";
// import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
	// eslint-disable-next-line react/prop-types
	const { totalPrice, totalProducts } = props;

	return (
		<div className="flex justify-between items-center mb-3 boder border-black">
			<p>
				<span>01.02.23</span>
				<span>{totalPrice}</span>
				<span>{totalProducts}</span>
			</p>
		</div>
	);
};

export default OrdersCard;
