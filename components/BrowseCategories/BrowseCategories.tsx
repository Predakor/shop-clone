"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { categories } from "@/lib/dummyData";

function BrowseCategories() {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          {categories.map(({ name, products }) => (
            <NavigationMenuItem key={name}>
              <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
              <NavigationMenuContent className="flex min-w-96 flex-col p-4">
                {products.map(({ name }) => (
                  <NavigationMenuLink key={name}>{name}</NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default BrowseCategories;
