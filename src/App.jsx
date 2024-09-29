import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedCard from "./components/CardItems/DetailedCardContainer";
import Contacto from "./components/Contacto/Contacto";


function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					main
					path="/preEntrega2-Beltran/"
					element={<ItemListContainer />}
				/>
				<Route
					path="/preEntrega2-Beltran/contacto"
					element={<Contacto />}
				/>
				<Route
					path="/preEntrega2-Beltran/item/:id"
					element={<DetailedCard />}
				/>
				<Route
					path="/preEntrega2-Beltran/category/:idCategory"
					element={<ItemListContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App