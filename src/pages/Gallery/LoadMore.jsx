export default function LoadMore() {
	return (
		<div className="mt-24 flex flex-col items-center">
			<button
				className="group flex flex-col items-center gap-4 text-stone-500 hover:text-primary-container transition-colors duration-500">
				<span className="text-[10px] tracking-[0.5em] uppercase font-label">Explorar más momentos</span>
				<span
					className="material-symbols-outlined text-4xl group-hover:translate-y-2 transition-transform duration-500">keyboard_double_arrow_down</span>
			</button>
		</div>
	)
}