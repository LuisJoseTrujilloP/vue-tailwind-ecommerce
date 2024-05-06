// eslint-disable-next-line no-unused-vars
import React from "react";
import { createContext, useState, useEffect} from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ShoppingCartProvider({ children }) {
	
	// Shopping Cart · Increment quantity
	const [count, setCount] = useState(0);

	// Product Detail · Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Checkout Side Menu · Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	// Product Detail · Show product
	const [productToShow, setProductToShow] = useState({});

	//Shopping Cart · Add Products to Cart
	const [cartProducts, setCartProducts] = useState([]);

	// Shopping Cart · Order
	const [order, setOrder] = useState([]);

	//get products
	const [items, setItems] = useState(null);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);

	// Get products by title
	const [searchByTitle, setSearchByTitle] = useState(0);


	return (
		<ShoppingCartContext.Provider
			value={{
				searchByTitle,
				setSearchByTitle,
				items, 
				setItems,
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow,
				cartProducts,
				setCartProducts,
				isCheckoutSideMenuOpen,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
				order,
				setOrder,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
