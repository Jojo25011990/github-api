import { useState, useEffect } from "react";
import DarkLightMode from "./DarkLightMode";
import Title from "./Title";
import SearchForm from "./SearchForm";
import User from "./User";

type GithubUser = {
	login: string;
	avatar_url: string;
	name: string;
	bio: string;
	location: string;
	company: string;
	blog: string;
	twitter_username: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
};

const Main = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);
	const [user, setUser] = useState<GithubUser | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const fetchGithubUser = async (username: string) => {
		const githubUrl = `https://api.github.com/users/${username}`;

		try {
			const responseUser = await fetch(githubUrl);

			if (!responseUser.ok) {
				setUser(null);
				setErrorMessage("No Result");
				throw new Error(
					"Nic nefunguje ako vzdy🤣 | Nothing works as always 🤣 "
				);
			}

			const resultUser = await responseUser.json();
			setUser(resultUser);
			setErrorMessage(null);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchGithubUser("octocat");
	}, []);

	return (
		<main
			className={`relative w-full flex items-center justify-center py-[130px] px-10 wrapper ${
				darkMode
					? "bg-dark-mode-bg text-light-mode-bg"
					: "bg-light-mode-bg text-dark-mode-bg"
			} `}
		>
			<div className="w-full max-w-[730px] flex flex-col gap-10">
				<div className="flex justify-between">
					<Title />
					<DarkLightMode
						darkMode={darkMode}
						setDarkMode={setDarkMode}
					/>
				</div>

				<SearchForm
					darkMode={darkMode}
					errorMessage={errorMessage}
					onSearch={fetchGithubUser}
				/>

				<User darkMode={darkMode} user={user} />
			</div>
		</main>
	);
};

export default Main;
