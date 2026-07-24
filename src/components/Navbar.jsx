import { useState } from "react";
import { Menu, Phone, Stethoscope } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect } from "react";

const navLinks = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Doctors",
    href: "doctors",
  },
  {
    name: "Testimonials",
    href: "testimonials",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navLinks.forEach((item) => {
        const section = document.getElementById(item.href);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-fu bg-blue-5 backdrop-blur- ${isScrolled || open ? "bg-teal-600 shadow-lg" : "bg-transparent"}`}
    >
      <div className="containe mx-aut w-full flex h-20 items-center justify-between px-4">
        <a
          href="#home"
          className="
flex
            items-center           gap-2
          "
        >
          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-teal-600
            text-white
          "
          >
            <Stethoscope size={22} />
          </div>

          <div>
            <h1
              className="
              text-xl
              font-bold
              text-white
            "
            >
              AuraDent
            </h1>

            <p
              className="
              text-xs
              text-white
            "
            >
              Dental Care
            </p>
          </div>
        </a>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <a
                  href={`#${link.href}`}
                  className={` ${activeSection === link.href & "text-red-500"}
                      rounded-md
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-teal-50
                      hover:text-teal-700
                  `}
                >
                  {link.name}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className=" hidden lg:flex">
          <button className=" flex items-center gap-2 bg-teal-600 hover:bg-teal-700 rounded-full py-2 px-3 text-white">
            <Phone size={18} />
            <span>Call Now</span>
          </button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
              w-72
            "
            >
              <div
                className="
              mt-10
              flex
              flex-col
              gap-4
            "
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      rounded-lg
                      px-4
                      py-3
                      text-lg
                      font-medium
                      text-slate-700
                      hover:bg-teal-50
                      hover:text-teal-700
                    "
                  >
                    {link.name}
                  </a>
                ))}

                <Button
                  className="
                  mt-4
                  bg-teal-600
                  hover:bg-teal-700
                "
                >
                  Book Appointment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
