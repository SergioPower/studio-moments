import { useState, useRef, useEffect } from "react";

function LazyImage({ src, alt }) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "100px" } // carga antes de que entre a pantalla
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className="mb-4 break-inside-avoid">
			{isVisible ? (
				<img
					src={src}
					alt={alt}
					loading="lazy"
					className="w-full rounded-2xl shadow-md hover:scale-[1.02] transition"
				/>
			) : (
				<div className="w-full h-40 bg-gray-200 animate-pulse rounded-2xl" />
			)}
		</div>
	);
}

export default function MasonryGallery({ images = [] }) {
	return (
		<div className="columns-2 sm:columns-3 md:columns-4 gap-4">
			{images.map((img, index) => (
				<LazyImage key={index} src={img.src} alt={img.alt || "gallery"} />
			))}
		</div>
	);
}