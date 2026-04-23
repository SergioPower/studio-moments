export default function Contact() {
	return (
		<section className="py-32 bg-surface-container-low border-t border-white/5">
			<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div>
					<h2 className="font-headline text-4xl font-bold tracking-tighter mb-12 uppercase">Encuéntranos</h2>
					<div className="space-y-12">
						<div className="flex gap-6">
							<span className="material-symbols-outlined text-primary-container text-3xl">location_on</span>
							<div>
								<h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Estudio Principal</h4>
								<p className="text-on-surface-variant leading-relaxed">Calle de la Luz 124, Colonia Mirador<br />Ciudad de
									México, CP 04100</p>
							</div>
						</div>
						<div className="flex gap-6">
							<span className="material-symbols-outlined text-primary-container text-3xl">mail</span>
							<div>
								<h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Contacto Directo</h4>
								<p className="text-on-surface-variant leading-relaxed">hola@momentos.studio<br />+52 55 1234 5678</p>
							</div>
						</div>
						<div className="flex gap-6">
							<span className="material-symbols-outlined text-primary-container text-3xl">schedule</span>
							<div>
								<h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Horarios</h4>
								<p className="text-on-surface-variant leading-relaxed">Lun - Vie: 09:00 - 19:00<br />Sáb: 10:00 - 15:00</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative h-125 bg-surface-container-highest overflow-hidden">
					<img className="w-full h-full object-cover grayscale brightness-50"
						data-alt="stylized dark map of Mexico City with minimalist architectural lines"
						data-location="Ciudad de México"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuC54ruMNJHSlFutyB3h992UQKHwvA7uoW-hwciRocbOeFu7szlrTblGSZjI_71br2qCUUuHccX8hbj-hOC-_oPU6vIqs6JEpyh848YGtW4HoQsEQkNlRMRSKtEHiozrbnQvgI_C1fESCaD8aLPZ4zzMffmx88-yF3BAzZvTadeeR98WeBMidzejg777fBvjJpHuo_ZLe1gey7h2UQP7YPKO1yfMT4gBvLyLl_wp9bo27HgfcXr8HKvASHXQZTtMePtWv1ZzPBc-m3GY" />
					<div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
						<div
							className="w-4 h-4 bg-primary-container rounded-full animate-pulse shadow-[0_0_20px_rgba(230,211,163,0.8)]">
						</div>
						<div className="mt-4 glass-card px-4 py-2 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
							Momentos Studio</div>
					</div>
				</div>
			</div>
		</section>
	)
}