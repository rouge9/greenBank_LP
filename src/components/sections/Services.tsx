import { Button } from "../ui/button";

export default function Services() {
  return (
    <div className="flex flex-col pt-16 md:pt-28 jus">
      <h1 className="text-2xl md:text-5xl text-center text-secondary font-extrabold">
        What do We Offer?
      </h1>
      <div className="flex pt-10 md:pt-16 flex-col md:flex-row gap-5 md:gap-0">
        <div className="flex">
          <Button className="flex p-4 py-9 backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-3xl">
            <img src="/security.svg " alt="security" className="w-10 h-10" />
          </Button>
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl text-secondary pl-6">
              Security Guraantee
            </h3>
            <p className="text-md md:text-lg text-muted-foreground pl-6 pt-2">
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
