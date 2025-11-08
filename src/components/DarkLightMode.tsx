import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";

type DarkLightModeProps = {
	setDarkMode: (darkMode: boolean) => void;
	darkMode: boolean;
};

const DarkLightMode = ({ setDarkMode, darkMode }: DarkLightModeProps) => {
	const handleClick = () => setDarkMode(!darkMode);

	return (
		<div className="relative w-[86px] flex items-center">
			<button
				type="button"
				className="absolute w-full cursor-pointer uppercase flex items-center justify-between gap-2 font-bold text-[13px] leading-[140%] tracking-[2.5px]"
				onClick={handleClick}
			>
				<p>{darkMode ? "Light" : "Dark"}</p>
				<img src={darkMode ? Sun : Moon} alt="Mode Icon" />
			</button>
		</div>
	);
};

export default DarkLightMode;
