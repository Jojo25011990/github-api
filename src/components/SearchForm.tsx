import { useState, type FormEvent, type ChangeEvent } from "react";
import SearchIcon from "../assets/icon-search.svg";

type SearchFormProps = {
	darkMode: boolean;
	errorMessage: string | null;
	onSearch: (username: string) => void;
};

const SearchForm = ({ darkMode, errorMessage, onSearch }: SearchFormProps) => {
	const [username, setUsername] = useState<string>("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Version 01 - Short If is pure satisfaction for me 🤣
		// if (username.trim()) onSearch(username);

		// Version 02 - better "UX", reset input 🤣
		if (username.trim()) {
			onSearch(username);
			setUsername("");
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);

	return (
		<form
			className={`relative w-full flex justify-between pl-6 pr-3 py-2 rounded-2xl ${
				darkMode
					? "bg-dark-mode-bg-app shadow-[0px_4px_4px_var(--shadow-dark-mode)]"
					: "bg-light-mode-bg-app shadow-[0px_16px_30px_-10px_var(--shadow-light-mode)]"
			}`}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}
		>
			<label htmlFor="search" className="sr-only">
				Search user
			</label>

			<img
				src={SearchIcon}
				alt="Search icon"
				className="absolute top-1/2 translate-y-[-50%]"
			/>

			<input
				type="search"
				id="search"
				value={username}
				onChange={handleChange}
				placeholder="Search Github username..."
				className={`w-[70%] outline-0 pl-10 bg-transparent ${
					darkMode
						? "text-light-mode-bg-app placeholder:text-light-mode-bg-app"
						: "text-normal-primary placeholder:text-normal-primary"
				}`}
			/>

			{errorMessage && (
				<p className="absolute top-1/2 translate-y-[-50%] right-[130px] z-50 font-bold leading-[150%] text-red-primary error-message">
					{errorMessage}
				</p>
			)}

			<button type="submit" className="form-btn">
				Search
			</button>
		</form>
	);
};

export default SearchForm;
