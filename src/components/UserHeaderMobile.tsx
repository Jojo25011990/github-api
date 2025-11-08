import UserAvatar from "./UserAvatar";

type GithubUser = {
	avatar_url: string;
	name: string;
	login: string;
	created_at: string;
};

type UserHeaderMobileProps = {
	darkMode: boolean;
	user: GithubUser;
};

const UserHeaderMobile = ({ darkMode, user }: UserHeaderMobileProps) => {
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
		<header className="flex justify-between user-header-mobile">
			<UserAvatar
				className="w-[70px] h-[70px] user-avatar-mobile"
				srcImg={user.avatar_url}
			/>

			<div className="flex flex-col items-end">
				<h3 className="text-right">
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
						darkMode
							? "text-light-mode-bg-app"
							: "text-normal-primary"
					}`}
				>
					Joined {createAtDate}
				</p>
			</div>
		</header>
	);
};

export default UserHeaderMobile;
