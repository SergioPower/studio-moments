import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Header from "./Header"
import Mosaico from "./Mosaico"
import LoadMore from "./LoadMore"

export default function Gallery() {
	return (
		<div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
			<NavBar />
			<main className="pt-40 pb-24 px-6 md:px-12 max-w-400 mx-auto">
				<Header />
				<Mosaico />
				<LoadMore />
			</main>
			<Footer />
		</div>
	)
}