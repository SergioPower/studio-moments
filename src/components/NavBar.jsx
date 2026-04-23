import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav
			className="fixed top-0 z-50 bg-[#131313]/70 backdrop-blur-md flex justify-between items-center px-8 py-6 w-full shadow-none">
			<Link to="/" >
				<div className="flex items-center gap-4 cursor-pointer">
					<img alt="Momentos Logo" className="h-8 w-auto"
						data-alt="minimalist and elegant photography studio logo icon in gold and white on a dark background"
						src="/icon.png" />
					<span className="text-2xl font-bold tracking-tighter text-[#E6D3A3] font-headline">Momentos</span>
				</div>
			</Link>
			<div className="hidden md:flex items-center gap-8">
				<Link to="/" className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm uppercase font-medium text-neutral-400 hover:text-[#E6D3A3] transition-colors"
				>Inicio</ Link>
				<Link to="/gallery" className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm uppercase font-medium text-[#E6D3A3] border-b border-[#E6D3A3]/20 pb-1">Gelería</Link>
				<a className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm uppercase font-medium text-neutral-400 hover:text-[#E6D3A3] transition-colors"
				>Studio</a>
				<a className="font-['Plus_Jakarta_Sans'] tracking-tight text-sm uppercase font-medium text-neutral-400 hover:text-[#E6D3A3] transition-colors"
				>Journal</a>
			</div>
			<button
				className="bg-primary-container text-on-primary-container px-6 py-2 text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all scale-98-on-click">
				Contact
			</button>
		</nav>
	)
}