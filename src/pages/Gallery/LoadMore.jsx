import ShinyText from "../../component/ShinyText";

export default function LoadMore({ children }) {
	return (
		<div className="mt-24 flex flex-col items-center">
			<ShinyText
				text={
					<div className="flex flex-col gap2 text-center">
						<span className="text-[10px] tracking-[0.5em] uppercase font-blod">
							{children || "Cargar Más"}
						</span>

						<span className="material-symbols-outlined text-4xl transition-transform duration-500">
							keyboard_double_arrow_down
						</span>
					</div>
				}
				speed={4}
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
	);
}