export default function NavBar() {
	return (
		<nav class="fixed top-0 w-full z-50 border-b border-outline-variant glass-nav">
			<div class="flex justify-between items-center px-10 py-4 max-w-screen-2xl mx-auto">
				<div class="flex items-center">
					<img alt="Logo Momentos" class="h-16 w-auto opacity-90" src="icon.png" />
				</div>
				<div class="hidden md:flex items-center gap-12">
					<a class="font-headline tracking-[0.2em] uppercase text-[10px] text-primary-container border-b border-primary-container pb-1 transition-all duration-300"
						href="#">Gallery</a>
					<a class="font-headline tracking-[0.2em] uppercase text-[10px] text-on-background/50 hover:text-primary-container transition-colors duration-300"
						href="#">Services</a>
					<a class="font-headline tracking-[0.2em] uppercase text-[10px] text-on-background/50 hover:text-primary-container transition-colors duration-300"
						href="#">Process</a>
					<a class="font-headline tracking-[0.2em] uppercase text-[10px] text-on-background/50 hover:text-primary-container transition-colors duration-300"
						href="#">Contact</a>
				</div>
				<button
					class="bg-primary-container text-on-primary-container px-8 py-3 text-[9px] uppercase tracking-[0.2em] font-headline font-semibold hover:bg-primary-fixed hover:shadow-lg transition-all active:scale-[0.98] duration-200">
					Book Session
				</button>
			</div>
		</nav>
	)
}