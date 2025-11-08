type GithubUser = {
	name: string;
	login: string;
	created_at: string;
};

type UserHeaderDesktopProps = {
	darkMode: boolean;
	user: GithubUser;
};

const UserHeaderDesktop = ({ darkMode, user }: UserHeaderDesktopProps) => {
	const createAtDateOptions: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "short",
		year: "numeric",
	};

	const createAtDate = new Date(user.created_at).toLocaleDateString(
		"en-GB",
		createAtDateOptions
	);

	return (
		<header className="flex justify-between user-bio-profile user-header-desktop">
			<h3>
				<span
					className={`font-bold text-[26px] leading-[120%] ${
						darkMode
							? "text-light-mode-bg-app"
							: "text-dark-tertiary"
					}`}
				>
					{/* No Name Sadly 🤣 */}
					{user.name || "No Name"}
				</span>
				<br />
				<span className="text-blue-primary leading-[150%]">
					@{user.login}
				</span>
			</h3>

			<p
				className={`text-[15px] leading-[150%] ${
					darkMode ? "text-light-mode-bg-app" : "text-normal-primary"
				}`}
			>
				Joined {createAtDate}
			</p>
		</header>
	);
};

export default UserHeaderDesktop;
