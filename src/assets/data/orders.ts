import { IconType } from "react-icons";
import { FaBell, FaCreditCard, FaKey } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

type Order = {
  icon: IconType;
  title: string;
  color: string;
};

export const orders: Order[] = [
  {
    icon: FaBell,
    title: "$2400, Design changes",
    color: "var(--green)",
  },
  {
    icon: FaCreditCard,
    title: "New order #1832412",
    color: "var(--red)",
  },
  {
    icon: FaCartShopping,
    title: "Server payments for April",
    color: "var(--blue)",
  },
  {
    icon: FaCreditCard,
    title: "New card added for order #4395133",
    color: "var(--orange)",
  },
  {
    icon: FaKey,
    title: "New card added for order #4395133",
    color: "var(--pink)",
  },
];
