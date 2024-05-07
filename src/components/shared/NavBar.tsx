import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  return (
    <>
      <div className="md:flex hidden justify-between items-center md:px-20 sticky top-0">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
          <h3 className="text-xl font-bold text-secondary">GreenBank</h3>
        </div>
        <div className="md:flex hidden items-center space-x-7 cursor-pointer">
          <h1 className="text-secondary font-semibold text-lg">Why Us</h1>
          <h1 className="text-secondary text-lg font-semibold">Services</h1>
          <h1 className="text-secondary text-lg font-semibold">Our Process</h1>
          <h1 className="text-secondary text-lg font-semibold">Payments</h1>
          <h1 className="text-secondary text-lg font-semibold">FAQs</h1>
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
      <div className="md:hidden flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
          <h3 className="text-xl font-bold text-secondary">GreenBank</h3>
        </div>
        <Sheet>
          <SheetTrigger>
            <img
              src="/menu.svg"
              alt="Menu"
              className="w-9 h-9 bg-green-600 rounded-md"
            />
          </SheetTrigger>
          <SheetContent className="bg-primary">
            <SheetHeader>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
                <h3 className="text-xl font-bold text-secondary">GreenBank</h3>
              </div>
            </SheetHeader>
            <ul className="flex flex-col items-start space-y-7 cursor-pointer pt-10">
              <li className="text-secondary font-semibold text-lg">Why Us</li>
              <li className="text-secondary text-lg font-semibold">Services</li>
              <li className="text-secondary text-lg font-semibold">
                Our Process
              </li>
              <li className="text-secondary text-lg font-semibold">Payments</li>
              <li className="text-secondary text-lg font-semibold">FAQs</li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
