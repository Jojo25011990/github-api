import DefaultAvatar from "../assets/Github Cat.png";

type UserAvatarProps = {
	className?: string;
	srcImg?: string;
	altImg?: string;
};

const UserAvatar = ({
	className = "",
	srcImg,
	altImg = "Github User Avatar",
}: UserAvatarProps) => {
	return (
		<img
			src={srcImg || DefaultAvatar}
			alt={altImg}
			className={`rounded-full object-cover ${className}`}
		/>
	);
};

export default UserAvatar;
