import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import {
	Box,
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar";

function App() {
	const [products, setProducts] = useState<Product[]>([]);

	const [darkMode, setDarkMode] = useState<boolean>(true);
	const palleteType = darkMode ? "dark" : "light";

	const theme = createTheme({
		palette: {
			mode: palleteType,
			background: {
				default: palleteType === "light" ? "#eaeaea" : "#121212",
			},
		},
	});

	useEffect(() => {
		fetch("https://localhost:5001/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline></CssBaseline>
			<NavBar
				darkMode={darkMode}
				changeTheme={() => setDarkMode(!darkMode)}
			/>
			<Box
				sx={{
					minHeight: "100vh",
					background: darkMode
						? "radial-gradient(circle, #1e3a8a, #111827)"
						: "radial-gradient(circle, #baecf9, #f0f9ff)",
					py: 6,
				}}
			>
				<Container
					maxWidth="xl"
					sx={{ mt: 14 }}
				>
					<Catalog products={products} />
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
