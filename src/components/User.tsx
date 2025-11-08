import UserAvatar from "./UserAvatar";
import UserBody from "./UserBody";
import UserFooter from "./UserFooter";
import UserHeaderDesktop from "./UserHeaderDesktop";
import UserHeaderMobile from "./UserHeaderMobile";

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

type UserProps = {
	darkMode: boolean;
	user: GithubUser | null;
};

const User = ({ darkMode, user }: UserProps) => {
	if (!user) {
		return (
			<article
				className={`w-full flex flex-col items-center justify-center p-12 rounded-2xl text-center gap-4 no-user-found ${
					darkMode
						? "bg-dark-mode-bg-app text-light-mode-bg-app shadow-[0px_4px_4px_var(--shadow-dark-mode)]"
						: "bg-light-mode-bg-app text-dark-mode-bg-app shadow-[0px_16px_30px_-10px_var(--shadow-light-mode)]"
				}`}
			>
				<h3 className="font-bold text-[22px] leading-[140%] tracking-[0px]">
					No result found!
				</h3>
				<p className="text-[15px] leading-[150%] tracking-[0px] text-normal-secondary">
					We couldn't find any Github users matching your search.
					Please double-check the username and try again.
				</p>
			</article>
		);
	}

	return (
		<article
			className={`w-full flex gap-8 p-12 rounded-2xl user-bio ${
				darkMode
					? "bg-dark-mode-bg-app shadow-[0px_4px_4px_var(--shadow-dark-mode)]"
					: "bg-light-mode-bg-app shadow-[0px_16px_30px_-10px_var(--shadow-light-mode)]"
			}`}
		>
			<UserAvatar
				className="w-[117px] h-[117px] user-avatar-desktop"
				srcImg={user.avatar_url}
			/>

			<div className="w-full max-w-[480px] flex flex-col gap-6">
				<UserHeaderDesktop darkMode={darkMode} user={user} />
				<UserHeaderMobile darkMode={darkMode} user={user} />

				<p className="opacity-70">
					{user.bio || "This profile has no bio"}
				</p>

				<UserBody darkMode={darkMode} user={user} />
				<UserFooter darkMode={darkMode} user={user} />
			</div>
		</article>
	);
};

export default User;
