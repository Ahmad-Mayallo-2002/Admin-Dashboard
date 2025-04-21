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
    href: "/admindashboard-2002",
    icon: MdDashboard,
  },
  {
    name: "Tables",
    href: "/admindashboard-2002/tables",
    icon: MdTableChart,
  },
  {
    name: "Billing",
    href: "/admindashboard-2002/billing",
    icon: MdReceipt,
  },
  {
    name: "Notifications",
    href: "/admindashboard-2002/notifications",
    icon: MdNotifications,
  },
  {
    name: "Pricing",
    href: "/admindashboard-2002/pricing",
    icon: FaDollarSign,
  },
];

export { links };
