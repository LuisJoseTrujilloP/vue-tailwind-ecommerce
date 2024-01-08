import React from "react";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export default function ShoppingCartProvider({ children }) {
	const [count, setCount] = useState(0);
	console.log("count:", count);

	return (
		<ShoppingCartContext.Provider value={{ count, setCount }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
