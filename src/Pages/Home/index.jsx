// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card/";
import { useContext } from "react";
import ProductDetail from "../../Components/ProductDetail/";
import { ShoppingCartContext } from "../../Context";

export default function Home() {
	
	const context = useContext(ShoppingCartContext);

	return (
		<Layout>
			<div className="flex w-80 items-center relative justify-center mb-6">
				<h1 className="font-medium text-xl">Exclusive products</h1>
			</div>
			<input type="text" placeholder="Search a product" className=""/>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
				{context.items?.map((item) => (
					<Card key={item.id} data={item} />
				))}
			</div>
			<ProductDetail></ProductDetail>
		</Layout>
	);
}
