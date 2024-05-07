import { Button } from "../ui/button";

export default function Cta() {
  return (
    <div className="flex pt-16 justify-center items-center">
      <div className="flex flex-col md:w-[500px]">
        <h1 className="text-2xl md:text-5xl text-secondary text-wrap font-extrabold">
          Easy Way to manage your Finances
        </h1>
        <p className="text-lg md:text-lg text-muted-foreground pt-2 md:pt-6">
          Easy to use mobile app that support on android and ios
        </p>
        <div className="flex space-x-4 pt-2 md:pt-8">
          <Button className="flex p-4 py-9 backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-3xl">
            <img src="/Apple.svg " alt="ios" className="" />
          </Button>
          <Button className="flex p-4 py-9 backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-3xl">
            <img src="/PlayStore.svg " alt="android" className="" />
          </Button>
        </div>
      </div>
      <div className="hidden md:flex pl-28">
        <img src="/ctaImage.png" alt="cta" className="" />
      </div>
    </div>
  );
}
