export default function Footer() {
	return (
		<footer className="bg-[#0E0E0E] w-full py-16 px-8 mt-auto border-t border-white/5">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
				<div className="flex flex-col items-center md:items-start gap-4">
					<span className="text-xl font-semibold tracking-tighter text-[#E6D3A3] font-headline uppercase">Momentos</span>
					<p className="font-['Plus_Jakarta_Sans'] text-xs tracking-widest uppercase text-neutral-500">© 2024 Momentos
						Photography. All rights reserved.</p>
				</div>
				<div className="flex flex-wrap justify-center gap-8">
					<a className="font-['Plus_Jakarta_Sans'] text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
						href="#">Privacy Policy</a>
					<a className="font-['Plus_Jakarta_Sans'] text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
						href="#">Terms of Service</a>
					<a className="font-['Plus_Jakarta_Sans'] text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
						href="#">Instagram</a>
					<a className="font-['Plus_Jakarta_Sans'] text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
						href="#">Vero</a>
					<a className="font-['Plus_Jakarta_Sans'] text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
						href="#">Archive</a>
				</div>
			</div>
		</footer>
	)
}