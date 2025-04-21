import {
  MdBookOnline,
  MdGroup,
  MdAttachMoney,
  MdPersonAdd,
} from "react-icons/md";
import { IconType } from "react-icons";

type Sale = {
  title: string;
  value: number;
  percentage: string;
  icon: IconType;
  color: string;
};

export const sales: Sale[] = [
  {
    title: "Booking",
    value: 128,
    percentage: "+12%",
    icon: MdBookOnline,
    color: "--black",
  },
  {
    title: "Today's Users",
    value: 1024,
    percentage: "+8%",
    icon: MdGroup,
    color: "--blue",
  },
  {
    title: "Revenue",
    value: 5630,
    percentage: "+15%",
    icon: MdAttachMoney,
    color: "--green",
  },
  {
    title: "Followers",
    value: 8940,
    percentage: "+5%",
    icon: MdPersonAdd,
    color: "--pink",
  },
];
