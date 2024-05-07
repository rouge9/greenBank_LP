export default function StataCard() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center backdrop-filter backdrop-blur bg-opacity-5 bg-white p-16 md:p-16 space-y-8 rounded-3xl">
        <div className="flex flex-col space-y-3 md:px-20">
          <h1 className="text-5xl text-center text-secondary font-semibold ">
            16y
          </h1>
          <h3 className="text-md text-green-600 font-semibold text-center">
            Experience
          </h3>
        </div>
        <div className="flex flex-col space-y-3 md:px-20">
          <h1 className="text-5xl text-center text-secondary font-semibold ">
            250+
          </h1>
          <h3 className="text-md text-green-600 font-semibold text-center">
            Merchant Partners
          </h3>
        </div>
        <div className="flex flex-col space-y-3 md:px-20">
          <h1 className="text-5xl text-center text-secondary font-semibold ">
            18+
          </h1>
          <h3 className="text-md text-green-600 font-semibold text-center">
            Years Experience
          </h3>
        </div>
        <div className="flex flex-col space-y-3 md:px-20">
          <h1 className="text-5xl text-center text-secondary font-semibold ">
            10.2k+
          </h1>
          <h3 className="text-md text-green-600 font-semibold text-center">
            Worldwide Clients
          </h3>
        </div>
      </div>
      <div className=" hidden md:flex  justify-between items-center pt-28">
        <img src="/upwork.svg" alt="upwork" className="w-28 h-24" />
        <img src="/petal.svg" alt="petal" className="w-28 h-24" />
        <img src="/rakuten.svg" alt="rekuten" className="w-28 h-24" />
        <img src="/nyt.svg" alt="nyt" className="w-64 h-24" />
        <img src="/vice.svg" alt="vice" className="w-28 h-24" />
        <img src="/dell.svg" alt="dell" className="w-28 h-24" />
      </div>
    </div>
  );
}
