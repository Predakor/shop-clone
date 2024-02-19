"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type Props = {};

const linksData = [
  {
    category: "Zakupy",
    links: [
      { name: "Aktualności", link: "/news" },
      { name: "Promocje", link: "/promotions" },
      { name: "Cashback", link: "/cashback" },
      { name: "Konfigurator PC", link: "/pc-configurator" },
      { name: "Poradniki zakupowe", link: "/buying-guides" },
      { name: "Wyprzedaże", link: "/sales" },
      { name: "Oferta dla firm (B2B)", link: "/business-offer" },
    ],
  },
  {
    category: "Obsługa klienta",
    links: [
      { name: "Serwis - reklamacje", link: "/customer-service/complaints" },
      { name: "Raty", link: "/customer-service/installments" },
      { name: "Leasing", link: "/customer-service/leasing" },
      { name: "Dostawa", link: "/customer-service/delivery" },
      { name: "Zwroty towarów", link: "/customer-service/returns" },
      {
        name: "Utylizacja zepsutego sprzętu",
        link: "/customer-service/disposal",
      },
    ],
  },
  {
    category: "Informacje",
    links: [
      { name: "Regulamin", link: "/information/terms" },
      { name: "Pomoc", link: "/information/help" },
      { name: "Polityka prywatności", link: "/information/privacy-policy" },
      { name: "Zarządzanie zgodami", link: "/information/consent-management" },
      { name: "Program partnerski", link: "/information/affiliate-program" },
      { name: "Mapa strony", link: "/information/sitemap" },
      { name: "Nano", link: "/komputronik/nano" },
      { name: "Komputronik Gaming", link: "/komputronik/gaming" },
    ],
  },
  {
    category: "Komputronik",
    links: [
      { name: "Kontakt", link: "/" },
      { name: "Kariera", link: "/" },
      { name: "Biuro Prasowe", link: "/" },
      { name: "Współpraca Agencja/Franczyza", link: "/" },
      { name: "Klienci hurtowi", link: "/" },
      { name: "Relacje inwestorskie", link: "/" },
    ],
  },
];

function Footer({}: Props) {
  const x = 123;
  return (
    <footer className="flex justify-center p-4">
      <div className="grid items-start gap-8 lg:grid-cols-5 ">
        {linksData.map(({ category, links }) => (
          <div key={category}>
            <h2 className="pb-2 text-xl font-bold lg:pb-4">{category}</h2>

            <ul>
              {links.map(({ link, name }) => (
                <Link href={link} key={link} prefetch={false}>
                  <li>{name}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <span className="lg:pb-4">
            <h2 className="text-xl font-bold">Masz Pytania</h2>
            <p>Zadzwoń lub napisz</p>
          </span>
          <div>
            <input
              value={"+48 61 668 00 07"}
              type="tel"
              name="phone-contact"
              id=""
            />
            <input value={"gmail.com"} type="email" name="" id="" />
            <input value={"location"} type="text" name="" id="" />
          </div>
          Skontaktuj się Salony Komputronik
          <div>
            <h2>Znajdziesz nas na:</h2>
            {/* socials here */}
          </div>
        </div>
      </div>
      {/* <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </footer>
  );
}

export default Footer;
