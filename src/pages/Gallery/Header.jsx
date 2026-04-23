export default function Header() {
	return (
		<header className="mb-20">
			<h1 className="text-5xl md:text-7xl font-headline font-light tracking-[0.15em] text-white mb-6 uppercase">
				Mosaico de <span className="text-primary-container">Momentos</span>
			</h1>
			<div className="flex flex-col md:row md:items-end justify-between gap-8">
				<p className="max-w-xl text-on-surface-variant leading-relaxed text-lg font-light">
					La luz no solo ilumina, narra historias. Explora nuestra curaduría de instantes transformados en memorias
					eternas a través de la lente editorial de MOMENTOS.
				</p>
				{/* Filter Tabs */}
				<div className="flex flex-wrap gap-4 font-label text-[10px] tracking-[0.2em] uppercase">
					<button
						className="px-6 py-3 border-b-2 border-primary-container text-primary-container transition-all">Todos</button>
					<button
						className="px-6 py-3 border-b-2 border-transparent text-stone-500 hover:text-stone-200 transition-all">Bodas</button>
					<button
						className="px-6 py-3 border-b-2 border-transparent text-stone-500 hover:text-stone-200 transition-all">Retratos</button>
					<button
						className="px-6 py-3 border-b-2 border-transparent text-stone-500 hover:text-stone-200 transition-all">Video</button>
				</div>
			</div>
		</header>
	)
}