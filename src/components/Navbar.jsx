import { useState } from "react";
import { Menu, Phone, Stethoscope } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect } from "react";
import { FaTeeth } from "react-icons/fa";
import { FaTeethOpen } from "react-icons/fa6";
import { GiFrontTeeth } from "react-icons/gi";

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
    name: "FAQs",
    href: "faqs",
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
        <a href="#home" className="flex items-center gap-2">
          {/* <div
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
            <GiFrontTeeth size={22}/>
          </div> */}
          <img src={logo} alt="logo" className="w-13 rounded-full" />
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
                  className={`rounded-md px-4 py-2 text-sm transition font-medium ${activeSection === link.href ? "bg-teal-50 text-teal-700" : "text-white hover:bg-teal-50 hover:text-teal-700"}`}
                >
                  {link.name}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className=" hidden lg:flex">
          <a
            href="tel:+233245494534"
            className={` flex items-center gap-2 ${isScrolled ? "bg-white text-teal-600" : " bg-teal-600 text-white"} hover:scale-97 cursor-pointer rounded-full py-2 px-3 `}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden bg-white/90 p-1 rounded-md">
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
              w-72
            "
            >
              <div className="mt-10 flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.href}`}
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

                <a
                  href="#appointment"
                  onClick={() => setOpen(false)}
                  className=" p-3 text-white rounded-lg w-fit md:w-[50%] ms-4
                  mt-4
                  bg-teal-600
                  hover:bg-teal-700
                "
                >
                  Book Appointment
                </a>
                <div className="lg:hidden mt-2">
                  <a
                    href="tel:+233245494534"
                    className={` flex items-center gap-2 ms-4 bg-teal-600 text-white hover:scale-97 cursor-pointer rounded-lg  p-3 w-[50%] `}
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
