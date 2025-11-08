import locationIcon from "../assets/icon-location.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import companyIcon from "../assets/icon-company.svg";
import websiteIcon from "../assets/icon-website.svg";

type GithubUser = {
	location: string;
	company: string;
	blog: string;
	twitter_username: string;
};

type UserFooterProps = {
	darkMode: boolean;
	user: GithubUser;
};

const UserFooter = ({ darkMode, user }: UserFooterProps) => {
	const iconClass = darkMode ? "brightness-[1000%]" : "brightness-100";
	const textClass = darkMode ? "text-light-mode-bg-app" : "text-dark-primary";

	return (
		<footer className="grid-wrapper gap-y-4">
			{/* Location */}
			<p className="flex gap-3">
				<img
					src={locationIcon}
					alt="Location Icon"
					className={iconClass}
				/>
				<span className={user.location ? textClass : "opacity-70"}>
					{user.location || "Not Available"}
				</span>
			</p>
			{/* End of Location */}

			{/* Twitter */}
			<p className="flex gap-3">
				<img
					src={twitterIcon}
					alt="Twitter Icon"
					className={iconClass}
				/>

				{user.twitter_username ? (
					<a
						href={`https://twitter.com/${user.twitter_username}`}
						target="_blank"
						rel="noopener noreferrer"
						className={
							darkMode ? "github-link-01" : "github-link-02"
						}
					>
						@${user.twitter_username}
					</a>
				) : (
					<span className="opacity-70">"Not Available"</span>
				)}
			</p>
			{/* End of Twitter */}

			{/* Website */}
			<p className="flex gap-3">
				<img
					src={websiteIcon}
					alt="Website Icon"
					className={iconClass}
				/>

				{user.blog ? (
					<a
						href={
							user.blog.startsWith("http")
								? user.blog
								: `https://${user.blog}`
						}
						target="_blank"
						rel="noopener noreferrer"
						className={
							darkMode ? "github-link-01" : "github-link-02"
						}
					>
						{user.blog}
					</a>
				) : (
					<span className="opacity-70">Not Available</span>
				)}
			</p>
			{/* End of Website */}

			{/* Company */}
			<p className="flex gap-3">
				<img
					src={companyIcon}
					alt="Company Icon"
					className={iconClass}
				/>
				<span className={user.company ? textClass : "opacity-70"}>
					{user.company || "Not Available"}
				</span>
			</p>
			{/* End of Company */}
		</footer>
	);
};

export default UserFooter;
