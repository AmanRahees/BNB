import { BsCupHotFill } from "react-icons/bs";
import { IoBed } from "react-icons/io5";
import { GiTreehouse, GiIsland } from "react-icons/gi";
import { MdOutlineCabin } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

export const categoryItems = [
  {
    title: "Rooms",
    icon: <IoBed size={20} />,
  },
  {
    title: "Bed & breakfasts",
    icon: <BsCupHotFill size={20} />,
  },
  {
    title: "Treehouses",
    icon: <GiTreehouse size={20} />,
  },
  {
    title: "Cabins",
    icon: <MdOutlineCabin size={20} />,
  },
  {
    title: "Beach",
    icon: <TbBeach size={20} />,
  },
  {
    title: "Islands",
    icon: <GiIsland size={20} />,
  },
];
