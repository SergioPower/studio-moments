export default function Service() {
	return (
		<section class="py-48 px-10 max-w-screen-2xl mx-auto">
			<div class="flex flex-col md:flex-row justify-between items-end mb-28 gap-12">
				<div class="max-w-2xl">
					<span
						class="text-primary-container font-headline text-[10px] tracking-[0.5em] uppercase mb-6 block opacity-80">Expertise</span>
					<h2 class="text-5xl md:text-7xl font-headline font-extralight tracking-tight leading-tight">Nuestros Servicios
					</h2>
				</div>
				<p class="text-on-surface-variant max-w-xs text-xs font-light tracking-wide leading-relaxed opacity-70">
					Excelencia técnica combinada con una visión artística única para cada necesidad, entregando resultados con la
					máxima sofisticación.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
				<!-- Card 1 -->
				<div
					class="group relative bg-surface-container-low p-12 border border-outline-variant hover:border-primary-container/40 transition-all duration-700 flex flex-col aspect-[4/5]">
					<span class="material-symbols-outlined text-primary-container mb-10 text-4xl opacity-70"
						data-icon="celebration">celebration</span>
					<h3 class="text-2xl font-headline font-light tracking-widest mb-6">Eventos Sociales</h3>
					<p class="text-on-surface-variant text-sm font-light tracking-wide leading-relaxed mb-auto opacity-70">
						Documentamos bodas, aniversarios y celebraciones con un enfoque cinematográfico y espontáneo.</p>
					<div class="mt-10 pt-10 border-t border-outline-variant flex items-center justify-between">
						<span
							class="text-[9px] uppercase tracking-[0.3em] font-headline text-on-background/40 group-hover:text-primary-container transition-colors">Discover</span>
						<span
							class="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform text-primary-container/50"
							data-icon="arrow_forward">arrow_forward</span>
					</div>
				</div>
				<!-- Card 2 -->
				<div
					class="group relative bg-surface-container-low p-12 border border-outline-variant hover:border-primary-container/40 transition-all duration-700 flex flex-col aspect-[4/5]">
					<span class="material-symbols-outlined text-primary-container mb-10 text-4xl opacity-70"
						data-icon="badge">badge</span>
					<h3 class="text-2xl font-headline font-light tracking-widest mb-6">Foto Identificación</h3>
					<p class="text-on-surface-variant text-sm font-light tracking-wide leading-relaxed mb-auto opacity-70">
						Fotografía profesional para pasaportes, visas y documentos oficiales con iluminación de estudio perfecta y
						entrega inmediata.</p>
					<div class="mt-10 pt-10 border-t border-outline-variant flex items-center justify-between">
						<span
							class="text-[9px] uppercase tracking-[0.3em] font-headline text-on-background/40 group-hover:text-primary-container transition-colors">Discover</span>
						<span
							class="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform text-primary-container/50"
							data-icon="arrow_forward">arrow_forward</span>
					</div>
				</div>
				{/* Card 3 */}
				<div
					class="group relative bg-surface-container-low p-12 border border-outline-variant hover:border-primary-container/40 transition-all duration-700 flex flex-col aspect-[4/5]">
					<span class="material-symbols-outlined text-primary-container mb-10 text-4xl opacity-70"
						data-icon="video_camera_back">video_camera_back</span>
					<h3 class="text-2xl font-headline font-light tracking-widest mb-6">Video Memorias</h3>
					<p class="text-on-surface-variant text-sm font-light tracking-wide leading-relaxed mb-auto opacity-70">
						Producción audiovisual de alta fidelidad que preserva tus historias más queridas con una estética visual
						impecable.</p>
					<div class="mt-10 pt-10 border-t border-outline-variant flex items-center justify-between">
						<span
							class="text-[9px] uppercase tracking-[0.3em] font-headline text-on-background/40 group-hover:text-primary-container transition-colors">Discover</span>
						<span
							class="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform text-primary-container/50"
							data-icon="arrow_forward">arrow_forward</span>
					</div>
				</div>
			</div>
		</section>
	)
}