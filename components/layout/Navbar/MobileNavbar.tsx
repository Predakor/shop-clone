import SearchInput from "@/components/SearchInput/SearchInput";
import Link from "next/link";
import { navData } from "./navData";

function MobileNav() {
  return (
    <nav className="grid grid-rows-2 justify-stretch gap-2">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-2xl">
          <Link href={"/"}>
            Shop
            <span className="text-sm text-primary">.com</span>
          </Link>
        </h2>
        <div className="flex gap-2">
          {navData.map(({ route, icon }) => (
            <Link key={route} href={route} className="flex items-center gap-1">
              {icon}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <SearchInput />
      </div>
    </nav>
  );
}

export default MobileNav;
