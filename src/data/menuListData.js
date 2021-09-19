import * as Fa from "react-icons/fa";
import * as Ri from "react-icons/ri";
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";

const menuListItems = [
  {
    name: "Home",
    className: "menuListItem",
    icon: <Fa.FaHome />,
    link: "/",
  },
  {
    name: "About & Skill",
    className: "menuListItem",
    icon: <Bs.BsFillPersonLinesFill />,
    link: "/about",
  },
  {
    name: "Skills",
    className: "menuListItem",
    icon: <Ai.AiOutlineDotChart />,
    link: "/skill",
  },
  {
    name: "Project",
    className: "menuListItem",
    icon: <Bs.BsCode />,
    link: "/project",
  },
  {
    name: "Contact",
    className: "menuListItem",
    icon: <Ri.RiContactsBookFill />,
    link: "/contact",
  },
];
export default menuListItems;
