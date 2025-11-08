type GithubUser = {
	public_repos: number;
	followers: number;
	following: number;
};

type UserBodyProps = {
	darkMode: boolean;
	user: GithubUser;
};

const UserBody = ({ darkMode, user }: UserBodyProps) => {
	return (
		<main
			className={`w-full py-4 px-8 flex flex-wrap justify-between gap-4 rounded-[10px] user-bio-stats ${
				darkMode ? "bg-dark-primary" : "bg-light-mode-bg"
			}`}
		>
			<p className="flex flex-col gap-1">
				<span className="text-[13px] leading-[150%]">Repos</span>
				<span className="font-bold text-[22px] leading-[140%]">
					{user.public_repos || 0}
				</span>
			</p>
			<p className="flex flex-col gap-1">
				<span className="text-[13px] leading-[150%]">Followers</span>
				<span className="font-bold text-[22px] leading-[140%]">
					{user.followers || 0}
				</span>
			</p>
			<p className="flex flex-col gap-1">
				<span className="text-[13px] leading-[150%]">Following</span>
				<span className="font-bold text-[22px] leading-[140%]">
					{user.following || 0}
				</span>
			</p>
		</main>
	);
};

export default UserBody;
