import { AuroraText } from "@/components/ui/aurora-text";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="fixed top-0 h-[80px]  lg:px-30 md:px-15 px-7 bg-white/10 backdrop-blur-[3px] border-b border-gray-500 left-0 right-0 flex items-center justify-between mx-auto  z-1000">
      <Link href="/" className="text-2xl text-gray-200  font-bold">
        &lt;/<AuroraText>Sweet</AuroraText>&gt;
      </Link>
      <NavigationMenu className="hidden md:flex items-center justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link className="cursor-hover text-gray-100 px-2" href="/">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className="cursor-hover text-gray-100 px-2" href="#/projects">
              Projects
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className="cursor-hover text-gray-100 px-2" href="#/blogs">
              Blogs
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-hover">
            <Link className="cursor-hover text-gray-100 px-2" href="/#contact">
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="cursor-pointer md:hidden">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900">
          <SheetClose className="text-white text-3xl">
            {/* <Button variant="outline" className="absolute top-4 right-4">
              Close
            </Button> */}
          </SheetClose>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col justify-start h-full gap-5">
              <NavigationMenuItem>
                <Link className="text-gray-100 mx-2" href="/">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className="text-gray-100 mx-2" href="/#projects">
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className="text-gray-100 mx-2" href="/#blogs">
                  Blogs
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className="text-gray-100 mx-2" href="/#contact">
                  Login
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
