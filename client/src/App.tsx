import { useEffect, useState } from "react";

function App() {
	const [products, setProducts] = useState<{ name: string; price: number }[]>(
		[]
	);

	useEffect(() => {
		fetch("https://localhost:5001/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	const addProducts = () => {
		setProducts((prevState) => [
			...prevState,
			{
				name: "product" + (prevState.length + 1),
				price: 100.0 * prevState.length,
			},
		]);
	};

	return (
		<>
			<h1 style={{ color: "red" }}>Re-store</h1>
			<ul>
				{products.map((item, index) => (
					<li key={index}>
						{item.name} - {item.price}
					</li>
				))}
			</ul>
			<button onClick={addProducts}>Add product</button>
		</>
	);
}

export default App;
