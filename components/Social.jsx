import { Icon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    Icon: <FaGithub />,
    path: "https://github.com/Venki1402",
  },
  {
    Icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/venkatesh-alampally-1b8528286/",
  },
  {
    Icon: <FaYoutube />,
    path: "https://www.youtube.com/@VennetDragneel",
  },
  {
    Icon: <FaTwitter />,
    path: "https://x.com/ASaiVenkatesh1",
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
