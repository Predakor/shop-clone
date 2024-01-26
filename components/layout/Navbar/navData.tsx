import { User, Phone, ShoppingBag } from "lucide-react";

type NavItem = {
  name: string;
  route: string;
  icon: React.ComponentElement<any, any>;
};

export const navData: NavItem[] = [
  { name: "login", route: "/login", icon: <User size={24} strokeWidth={1} /> },
  {
    name: "contact",
    route: "/contact",
    icon: <Phone size={24} strokeWidth={1} />,
  },
  {
    name: "cart",
    route: "/cart",
    icon: <ShoppingBag size={24} strokeWidth={1} />,
  },
];
