"use client";
import BrowseCategories from "@/components/BrowseCategories/BrowseCategories";
import useIsIntersecting from "@/hooks/useIsIntersecting";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import MobileNav from "../Navbar/MobileNavbar";
import Navbar from "../Navbar/Navbar";

type Props = {};

function Header({}: Props) {
  const headerRef = useRef<HTMLElement>(null);
  const isSticky = useIsIntersecting({ target: headerRef });

  const isMobile = useMediaQuery({
    query: "(max-width : 1024px)",
  });

  return (
    <header
      className={`sticky -top-1 z-50 flex flex-col items-center gap-4 bg-inherit p-2`}
      ref={headerRef}
    >
      {isMobile ? (
        <MobileNav />
      ) : (
        <>
          <Navbar />
          <BrowseCategories />
        </>
      )}
      {isSticky && (
        <span className="absolute bottom-0 h-1 w-screen border-b-2" />
      )}
    </header>
  );
}

export default Header;
