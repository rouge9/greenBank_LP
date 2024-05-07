import { Button } from "../ui/button";

export default function OurProcess() {
  return (
    <div className="flex pt-16 md:pt-20 md:p-24 justify-center items-center">
      <div className="flex flex-col md:w-[600px]">
        <h1 className="text-2xl md:text-5xl text-secondary text-wrap font-extrabold">
          Design your Personalized credit Card.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground pt-2 md:pt-8">
          You have the freedom to personalize the design of your credit card,
          ensuring a truly unique experience that makes you feel extraordinary
        </p>
        <div className="flex space-x-4 pt-2 md:pt-8">
          <Button className="rounded-full bg-green-600 text-secondary font-semibold hover:bg-secondary hover:text-green-600 gap-3 md:gap-6 p-7">
            Create New Card
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
      </div>
      <div className="hidden md:flex pl-28">
        <img src="/groupCard.svg" alt="OurProcess" className="" />
      </div>
    </div>
  );
}
