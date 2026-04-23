import ShinyText from '../../component/ShinyText';
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
			<div className="absolute inset-0 z-0">
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-container/10 rounded-full blur-[120px]">
				</div>
				<img className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
					data-alt="cinematic wide shot of a professional photography studio with high-end cameras and soft ambient golden lighting"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9C94z0htt9nhX89pJDwBGTKRY-OLyNjIVsFgpxlpHNNQk_szoQNXS-q4QiVVTnFg3lRqMPem4JfJ7n7PY2OV6MH7viYeNbOu-LMoldOkw8NUFkdhU9a5RRXkPBDTUpK9_dNAiZglgq2F5aN_RxaGAysVc-cOYyduIMFTB2GxsHvSyN-hArRPB52opsijgN-zrDCB1J7U_44QloqVF_99p2gFuDuRoiEF6kui8ZDNWm7eY7_CH9KlnHlh0mTPGs9fhsAyVkorJbu3v" />
				<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
			</div>
			<div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
				<p className="font-headline text-primary tracking-[0.3em] uppercase text-sm mb-6 font-medium">Momentos Studio</p>
				<h1 className="font-headline leading-tight mb-8">
					<span className="block text-5xl md:text-8xl font-light tracking-tighter text-on-background">Fotografía <span
						className="font-bold italic text-primary-container text-glow">&amp;</span></span>
					<span
						className="block text-6xl md:text-9xl font-extrabold tracking-tighter text-on-surface uppercase">Video</span>
				</h1>
				<div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
					<Link to="/gallery">
						<button
							className="px-10 py-4 bg-primary-container text-on-primary-container font-bold uppercase tracking-widest text-sm transition-all hover:bg-primary-fixed scale-98-on-click cursor-pointer">
							Explorar Galería
						</button>
					</Link>
					<button
						className="px-10 py-4 border border-primary-container/30 text-primary-container font-bold uppercase tracking-widest text-sm transition-all hover:bg-primary-container/5 scale-98-on-click">
						Nuestra Historia
					</button>
				</div>
			</div>
			<div className="absolute bottom-12 left-12 hidden lg:block">
				<div className="flex items-center gap-4 text-xs tracking-widest text-on-surface-variant uppercase font-medium">
					<span className="w-12 h-px bg-primary-container/50"></span>
					<ShinyText
						text="SCROLL TO EXPERIENCE"
						speed={3.5}
						delay={0}
						color="#685a34"
						shineColor="#ffffff"
						spread={75}
						direction="left"
						yoyo={false}
						pauseOnHover={false}
						disabled={false}
					/>
				</div>
			</div>
		</section>
	)
}