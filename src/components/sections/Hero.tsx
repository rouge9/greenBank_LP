import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Button } from "../ui/button";

export default function Hero() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="pt-8 md:pt-32 flex">
      <div className="flex flex-col md:px-20 ">
        <h1 className="text-2xl md:text-6xl font-extrabold text-secondary md:mb-6">
          Discover the Perfect
        </h1>
        <div className="flex">
          <img
            src="/Vector4.svg"
            alt="Vector4"
            className=" w-40 md:w-96 absolute"
          />
          <h1 className="text-2xl md:text-6xl font-extrabold text-secondary">
            Credit Card for You
          </h1>
        </div>
        <div className="md:w-[580px]">
          <p className="text-lg md:text-xl text-muted-foreground text-balance md:text-wrap pt-2 md:pt-11 md:p-2">
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
      <div className="hidden md:flex justify-center items-center ">
        <img src="/HeroImage.svg" alt="HeroImage" className="" />
      </div>
    </div>
  );
}
