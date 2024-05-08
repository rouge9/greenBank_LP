import { people } from "@/lib/data";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Button } from "../ui/button";
import useMediaQuery from "@/lib/usemediaQuery";
import clsx from "clsx";

export default function Hero() {
  const isLargeDesktop = useMediaQuery("(min-width: 1700px)");

  return (
    <div id="home" className="pt-8 md:pt-32 flex pb-6 md:pb-20">
      <div className="flex flex-col md:px-20 ">
        <h1 className="text-2xl md:text-5xl font-extrabold text-secondary md:mb-6">
          Discover the Perfect
        </h1>
        <div className="flex">
          <img
            src="/Vector4.svg"
            alt="Vector4"
            className=" w-40 md:w-80 absolute"
          />
          <h1 className="text-2xl md:text-5xl font-extrabold text-secondary">
            Credit Card for You
          </h1>
        </div>
        <div className="md:w-[580px]">
          <p className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground text-balance md:text-wrap pt-2 md:pt-11 md:p-2">
            Discover the power of our secure and rewarding credit cards. Explore
            our range of credit cards and take control of your finances today.
          </p>
        </div>
        <div className="flex space-x-4 pt-2 md:pt-8">
          <Button className="rounded-full bg-green-600 text-secondary font-semibold hover:bg-secondary hover:text-green-600 gap-3 md:gap-6 p-7">
            Get Started
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                d="M1 9.75H23.5M23.5 9.75L16.5 18.25M23.5 9.75L16.5 1.75"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="flex pt-8 gap-8">
          <div className="flex">
            <AnimatedTooltip items={people} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-secondary">10.2k+</h3>
            <p className="text-muted-foreground text-sm text-wrap w-40">
              Active users around the world
            </p>
          </div>
        </div>
      </div>
      <div
        className={clsx("hidden lg:flex lg:pl-28", isLargeDesktop && "pl-96")}
      >
        <img
          src="/HeroImage.svg"
          alt="HeroImage"
          className={clsx(isLargeDesktop && "w-[9500px] h-[800px]")}
        />
      </div>
    </div>
  );
}
