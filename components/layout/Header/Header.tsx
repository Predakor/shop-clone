"use client";
import BrowseCategories from "@/components/BrowseCategories/BrowseCategories";
import { useMediaQuery } from "react-responsive";
import MobileNav from "../Navbar/MobileNavbar";
import Navbar from "../Navbar/Navbar";

type Props = {};

function Header({}: Props) {
  const isMobile = useMediaQuery({
    query: "(max-width : 1024px)",
  });

  return (
    <header className="flex flex-col items-center gap-4 p-2">
      {isMobile ? (
        <MobileNav />
      ) : (
        <>
          <Navbar />
          <BrowseCategories />
        </>
      )}
    </header>
  );
}

export default Header;
