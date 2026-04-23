import NavBar from "../../components/NavBar"
import Hero from "../../components/Hero"

export default function Home() {
	return (
		<div className="bg-surface-dim text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
			<NavBar />
			<Hero />
		</div>
	)

}