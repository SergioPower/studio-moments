export default function Hero() {
	return (
		<section class="relative min-h-screen flex flex-col items-center justify-center pt-24 bg-surface-container-lowest overflow-hidden">
			<div class="absolute inset-0 z-0 opacity-20">
				<img class="w-full h-full object-cover grayscale"
					data-alt="cinematic wide shot of a dark photography studio with soft dust motes dancing in a single beam of golden light"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVyw4SDo046d1iOpAB6qRaraCS_Ey84GyFlBkCfrYhRSZeU8YeKUB_jglCB9RNBiYN5XtPdmEmWc0dgZ7O91NFRo9HwraUoM0yGontfe770mEYoRiQ60dCbOWAjqoPmZ1tFGP9lgFbbbiuUfmRsIIJZ-O7wsVTCNttGeqo9SVT3nbU1KnWweBIdiIFL6mGkCctZ0kZbmE3LvheIajktvuJh2TqwubcmFjzP80P73WM00rXs9cbpz8Q8UvCQbiVUT44OFswIOMZZ6xk" />
			</div>
			<div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
				<h1
					class="text-6xl md:text-9xl font-headline font-extralight tracking-[0.25em] text-on-background mb-12 uppercase leading-none">
					Fotografía <br /> <span class="text-primary-container font-light opacity-80">&amp;</span> Video
				</h1>
				<div class="gold-gradient-line w-full max-w-lg mx-auto mb-10"></div>
				<p class="text-on-surface-variant font-light tracking-[0.5em] uppercase text-xs md:text-sm opacity-60">
					Capturamos tus mejores momentos
				</p>
			</div>
			<div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 animate-pulse">
				<span class="text-[9px] tracking-[0.5em] uppercase text-outline">Explore</span>
				<div class="w-px h-12 bg-primary-container/30"></div>
			</div>
		</section>
	)
}