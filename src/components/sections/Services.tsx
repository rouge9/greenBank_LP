import { Button } from "../ui/button";

export default function Services() {
  return (
    <div className="flex flex-col pt-16 lg:pt-28">
      <h1
        id="services"
        className="text-2xl lg:text-5xl text-center text-secondary font-extrabold"
      >
        What do We Offer?
      </h1>
      <div className="flex pt-10 lg:pt-16 flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between lg:items-center">
        <div className="flex">
          <Button className="flex p-4 py-9 backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-3xl">
            <img src="/security.svg " alt="security" className="w-10 h-10" />
          </Button>
          <div className="flex flex-col">
            <h3 className="text-xl lg:text-2xl text-secondary pl-6">
              Security Guraantee
            </h3>
            <p className="text-md lg:text-lg text-muted-foreground pl-6 pt-2">
              Your Data and fubds will be securley protected
            </p>
          </div>
        </div>
        <div className="flex">
          <Button className="flex p-4 py-9 backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-3xl">
            <img src="/group.svg " alt="security" className="w-10 h-10" />
          </Button>
          <div className="flex flex-col">
            <h3 className="text-2xl text-secondary pl-6">Investing</h3>
            <p className="text-lg text-muted-foreground pl-6 pt-2">
              Your Data and fubds will be securley protected
            </p>
          </div>
        </div>
        <div className="flex">
          <Button className="flex p-4 py-9 backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-3xl">
            <img src="/rectangle.svg" alt="security" className="w-10 h-10" />
          </Button>
          <div className="flex flex-col">
            <h3 className="text-2xl text-secondary pl-6">Multiple Method</h3>
            <p className="text-lg text-muted-foreground pl-6 pt-2">
              Your Data and fubds will be securley protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
