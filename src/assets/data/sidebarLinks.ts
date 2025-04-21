import {
  MdDashboard,
  MdTableChart,
  MdReceipt,
  MdNotifications,
} from "react-icons/md";
import { IconType } from "react-icons";
import { FaDollarSign } from "react-icons/fa";

type Link = {
  name: string;
  href: string;
  icon: IconType;
};

const links: Link[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: MdDashboard,
  },
  {
    name: "Tables",
    href: "/tables",
    icon: MdTableChart,
  },
  {
    name: "Billing",
    href: "/billing",
    icon: MdReceipt,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: MdNotifications,
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: FaDollarSign,
  },
];

export { links };
