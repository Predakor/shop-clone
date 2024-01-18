"use client";

import SearchInput from "@/components/SearchInput/SearchInput";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Phone, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

type NavItem = {
  name: string;
  route: string;
  icon: React.ComponentElement<any, any>;
};

const navData: NavItem[] = [
  { name: "login", route: "/login", icon: <User size={20} strokeWidth={1} /> },
  {
    name: "contact",
    route: "/contact",
    icon: <Phone size={20} strokeWidth={1} />,
  },
  {
    name: "cart",
    route: "/cart",
    icon: <ShoppingBag size={20} strokeWidth={1} />,
  },
];

function Navbar() {
  return (
    <nav className="flex items-center gap-4 p-2">
      <h2 className="hidden text-2xl md:block">
        <Link href={"/"}>
          Shop
          <span className="text-sm text-primary">.com</span>
        </Link>
      </h2>
      <div>
        <SearchInput />
      </div>
      <div className="flex gap-4  ">
        {navData.map(({ name, route, icon }) => (
          <Link key={route} href={route} className="flex items-center gap-1">
            {icon}
            {name}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
