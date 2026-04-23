import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import "index.css"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/galeria" element={<Galeria />} />
			<Route path="/contacto" element={<Contacto />} />
		</Routes>
	);
}

export default App;