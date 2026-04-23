export default function Service() {
	return (
		<section className="py-32 px-8 bg-surface-container-lowest relative overflow-hidden">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
				<div className="lg:col-span-5 sticky top-32">
					<h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
						Servicios <br /><span className="text-primary-container/60 font-light">Especializados</span>
					</h2>
					<p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
						Capturando la esencia de cada instante a través de una lente curada. Desde eventos íntimos hasta
						producciones comerciales de alta fidelidad.
					</p>
					<div className="mt-12 space-y-4">
						<div className="flex items-center gap-4 group cursor-pointer">
							<span className="text-primary-container font-bold text-xl">01</span>
							<span className="h-px w-8 bg-outline-variant group-hover:w-16 transition-all"></span>
							<span className="uppercase tracking-widest text-sm font-bold">Reserva Directa</span>
						</div>
					</div>
				</div>
				<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Card 1 */}
					<div className="glass-card p-8 group hover:border-primary-container/40 transition-all duration-500">
						<div className="h-64 mb-8 overflow-hidden">
							<img
								className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
								data-alt="elegant wedding reception with warm candle lighting and sophisticated floral arrangements"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCecsqccJPLZc_zZAdFLOLmJN5BWJwXaoOS0reqs7Wct0OHxYrs01Fyfie0vkY4Yx1b1Ig94kEPtcRW8QKNn6fOU9xp4VeFhgjnJ_dLzbpGi_gT7utR3QtbtbBcGsztCacL5P4DV8OFyYJRHobgstrcLUqwH99Q1CAKGq2_u2iZiL15F9I8g5TCmychvAWQfBXjLYGXKgQzdGsN_e-iai0OfucLOwihu7VWXUyxl6dqeKIqEFbdyArNln1TuB0W0b2Y3soFAUnAwLVE" />
						</div>
						<h3 className="font-headline text-2xl font-bold mb-4 text-primary-container uppercase tracking-tight">Eventos
							Sociales</h3>
						<p className="text-on-surface-variant text-sm leading-relaxed mb-6">Bodas, aniversarios y celebraciones que
							merecen ser recordadas por siempre.</p>
						<span className="material-symbols-outlined text-primary-container">arrow_outward</span>
					</div>
					{/* Card 2 */}
					<div
						className="glass-card p-8 group hover:border-primary-container/40 transition-all duration-500 translate-y-12">
						<div className="h-64 mb-8 overflow-hidden">
							<img
								className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
								data-alt="high-end studio portrait of a man with dramatic side lighting and sharp focus on eyes"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYDPoJfwwLxOhgUX_TLH4cyJDf5TNBEBIjUu7EYAXfMiLowLvRfyP3R2gt514ObIkKBN9jmRXUWFewL8TZR1OdxbhoY04_e00-tVoMickKlOlSLaT8eY0LWRzJaG8rbDkWj_gmk5isyfHAeZ_8cMjpn4pK7hlRhOhqMeI5eHcHOZXRaI99QLAX9dwbvvepeK0J1J0J56Gu-PFHc6Iy7TEiVFPPbTSmmiXT0J-UYaRH1dVUqqQJw8Bbfy_WLfywhIHClRRYiSZWiGsJ" />
						</div>
						<h3 className="font-headline text-2xl font-bold mb-4 text-primary-container uppercase tracking-tight">Foto
							Identificación</h3>
						<p className="text-on-surface-variant text-sm leading-relaxed mb-6">Retratos profesionales para perfiles
							ejecutivos, pasaportes y visas con iluminación de estudio.</p>
						<span className="material-symbols-outlined text-primary-container">arrow_outward</span>
					</div>
					{/* Card 3 */}
					<div
						className="glass-card p-8 group hover:border-primary-container/40 transition-all duration-500 md:col-span-2 mt-12">
						<div className="flex flex-col md:flex-row gap-8">
							<div className="md:w-1/2 h-80 overflow-hidden">
								<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
									data-alt="professional filmmaker operating a cinema camera on a gimbal during a documentary shoot"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkh2ApRG3j7-DyvQ09hrbP7FvErAf4Ovz9K8OIcMyAHfSXmRV21upI7Cwek6h_ZyKACmCgBPNCNNJ_ra1sxGUwn08kCEujUvQXH9FmLIX-vLdD1eu8lF4ym4nV0ZulWQTlBl0caUWIXO-1juktlwr1trTA3KACIGqAIJPzoSvQDcKm8cU0qCmkDLs50iC4S9yrj20IP_rQj0SXphdoexArx92_8aZqCc2ZqBEYrgKT0giGga_hHRCxHUwk8WHVmuwsUK0tzO9RSDVL" />
							</div>
							<div className="md:w-1/2 flex flex-col justify-center">
								<h3 className="font-headline text-4xl font-bold mb-4 text-primary-container uppercase tracking-tighter">
									Video Memorias</h3>
								<p className="text-on-surface-variant text-lg leading-relaxed mb-8">Narrativas visuales en 4K que capturan
									el movimiento y el sonido de tus momentos más valiosos.</p>
								<button
									className="self-start px-8 py-3 bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-widest">Consultar
									Tarifas</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}