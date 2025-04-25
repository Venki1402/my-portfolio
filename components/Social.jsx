import { Icon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    Icon: <FaGithub />,
    path: "https://github.com/Venki1402",
  },
  {
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="16"
        height="16"
        viewBox="0 0 50 50"
      >
        <path
          fill="currentColor"
          d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"
        ></path>
      </svg>
    ),
    path: "https://x.com/ASaiVenkatesh1",
  },
  {
    Icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/venkateshalampally",
  },
  {
    Icon: <FaYoutube />,
    path: "https://www.youtube.com/@VennetDragneel",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.Icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
