import { FaAccessibleIcon, FaReact, FaGg } from "react-icons/fa";
import { SiDatabricks, SiIonic } from "react-icons/si";
import { AiOutlineGithub} from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureList = [
  {
    id: 1,
    icon: <FaReact  size={22} className="text-color bold" />,
    heading: "Front-end development",
    text: "For frontend development, I'm a huge fan of React.js and it's ecosystem (e.g. Next.js & Gatsby.js). I also use bootstrap and good in craco, mdb-ui-kit, react-bootstrap etc",
  },
  {
    id: 2,
    icon: <SiIonic size={22} className="text-color bold"/>,
    heading: "Mobile App development",
    text: "For mobile app development, I use react native(Bare native and Expo cli), I also work with ionic cordova(React)",
  },
  {
    id: 3,
    icon: <AiOutlineGithub  size={22} className="text-color bold"/>,
    heading: "Version control",
    text: "For deployment, i use the popular version control tool(Github). I also make use of heroku and netlify for other activities",
  }
];
