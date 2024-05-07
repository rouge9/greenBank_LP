import { Button } from "../ui/button";

export default function Payments() {
  return (
    <div className="flex pt-16 md:pt-20 md:p-24 justify-center items-center">
      <div className="hidden md:flex pr-28">
        <img src="/groupCardLeft.svg" alt="Payment" className="" />
      </div>
      <div className="flex flex-col md:w-[600px]">
        <h1 className="text-2xl md:text-5xl text-secondary text-wrap font-extrabold">
          Find the Perfect Credit Card for You
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground pt-2 md:pt-8">
          Discover your ideal credit card with ease. Our comprehensive selection
          caters to every financial need and lifestyle. Whether you seek
          cashback rewards, travel perks, or building credit, we have the
          perfect credit card waiting for you. Unleash the possibilities and
          find the credit card that fits your unique goals and aspirations.
        </p>
        <div className="flex space-x-4 pt-2 md:pt-8">
          <Button className="rounded-full bg-green-600 text-secondary font-semibold hover:bg-secondary hover:text-green-600 gap-3 md:gap-6 p-7">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
