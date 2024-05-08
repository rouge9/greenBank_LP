import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import clsx from "clsx";
import { Link } from "react-scroll";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50",
        scrolled &&
          "shadow-md backdrop-filter backdrop-blur bg-opacity-5 bg-white"
      )}
    >
      <div className="lg:flex hidden justify-between items-center md:px-20 p-8">
        <a href="#" className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
          <h3 className="text-xl font-bold text-secondary">GreenBank</h3>
        </a>
        <div className="md:flex hidden items-center space-x-7 cursor-pointer">
          <Link
            activeClass="border-b-4 border-green-600"
            to="whyus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-secondary text-lg font-semibold"
          >
            Why Us
          </Link>
          <Link
            activeClass="border-b-4 border-green-600"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-secondary text-lg font-semibold"
          >
            Services
          </Link>
          <Link
            activeClass="border-b-4 border-green-600"
            to="ourprocess"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-secondary text-lg font-semibold"
          >
            Our Process
          </Link>
          <Link
            activeClass="border-b-4 border-green-600"
            to="payment"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-secondary text-lg font-semibold"
          >
            Payments
          </Link>
          <Link
            activeClass="border-b-4 border-green-600"
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-secondary text-lg font-semibold"
          >
            FAQs
          </Link>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="md:flex hidden rounded-full bg-transparent border-2 border-green-600 text-green-600 text-lg font-semibold hover:bg-green-600 hover:text-secondary"
        >
          Contact
        </Button>
      </div>

      {/* mobile navbar */}
      <div className="lg:hidden flex justify-between items-center p-5">
        <a href="#" className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
          <h3 className="text-xl font-bold text-secondary">GreenBank</h3>
        </a>
        <Sheet>
          <SheetTrigger>
            <img
              src="/menu.svg"
              alt="Menu"
              className="w-9 h-9 bg-green-600 rounded-md"
            />
          </SheetTrigger>
          <SheetContent className="bg-neutral-900">
            <SheetHeader>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
                <h3 className="text-xl font-bold text-secondary">GreenBank</h3>
              </div>
            </SheetHeader>
            <ul className="flex flex-col items-start space-y-7 cursor-pointer pt-10">
              <Link
                activeClass="border-b-4 border-green-600"
                to="whyus"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-secondary text-lg font-semibold"
              >
                Why Us
              </Link>
              <Link
                activeClass="border-b-4 border-green-600"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-secondary text-lg font-semibold"
              >
                Services
              </Link>
              <Link
                activeClass="border-b-4 border-green-600"
                to="ourprocess"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-secondary text-lg font-semibold"
              >
                Our Process
              </Link>
              <Link
                activeClass="border-b-4 border-green-600"
                to="payment"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-secondary text-lg font-semibold"
              >
                Payments
              </Link>
              <Link
                activeClass="border-b-4 border-green-600"
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-secondary text-lg font-semibold"
              >
                FAQs
              </Link>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
