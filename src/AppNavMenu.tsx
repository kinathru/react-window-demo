"use client";

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Plain HTML",
    href: "/plain-html",
    description: "Plain HTML Select with a lot of elements",
  },
  {
    title: "ShadCN",
    href: "/shadcn",
    description: "ShadCN select",
  },
  {
    title: "React Window",
    href: "/react-window",
    description: "React Window Implementation",
  },
  {
    title: "ShadCN React Window",
    href: "/shadcn-react-window",
    description: "ShadCN React Window Example",
  },
  {
    title: "ShadCN Combo Box",
    href: "/shadcn-combo-box",
    description: "ShadCN Combo Box Example",
  },
];

export function AppNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
