export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col backdrop-filter backdrop-blur bg-opacity-5 bg-white">
      <div className="flex p-8 lg:p-24 flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        <div className="flex flex-col gap-3 lg:w-[350px]">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
            <h3 className="text-lg 2xl:text-2xl font-bold text-secondary">
              GreenBank
            </h3>
          </div>
          <p className="text-muted-foreground text-md 2xl:text-xl">
            Discover the power of our secure and rewarding credit cards
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg 2xl:text-2xl font-bold text-secondary">
            About us
          </h3>
          <ul className="flex flex-col gap-2 2xl:text-xl text-md">
            <li className="text-muted-foreground  2xl:text-xl">Our Story</li>
            <li className="text-muted-foreground ">Our Team</li>
            <li className="text-muted-foreground ">Careers</li>
            <li className="text-muted-foreground ">Careers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-secondary 2xl:text-2xl">
            Prodcuts
          </h3>
          <ul className="flex flex-col gap-2 2xl:text-xl text-md">
            <li className="text-muted-foreground ">Credits Card</li>
            <li className="text-muted-foreground ">Gift Cards </li>
            <li className="text-muted-foreground ">Savings account</li>
            <li className="text-muted-foreground ">NFT</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-secondary 2xl:text-2xl">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-2 2xl:text-xl text-md">
            <li className="text-muted-foreground ">Free rewards</li>
            <li className="text-muted-foreground ">Documentation</li>
            <li className="text-muted-foreground ">Documentation</li>
            <li className="text-muted-foreground ">Affliation program</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 pr-44">
          <h3 className="text-lg font-bold text-secondary 2xl:text-2xl">
            Social
          </h3>
          <ul className="flex flex-col gap-2 2xl:text-xl text-md">
            <li className="text-muted-foreground ">Change log</li>
            <li className="text-muted-foreground ">Licence</li>
            <li className="text-muted-foreground ">Site Maps</li>
            <li className="text-muted-foreground ">News</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:px-24 p-8">
        <p className="text-muted-foreground text-md 2xl:text-xl pb-4">
          © {year} GreenBank. All rights reserved
        </p>
        <p className="text-muted-foreground text-sm 2xl:text-lg">
          This page uses cookies. See cookies details{" "}
          <a href="#" className="text-muted-foreground underline">
            here
          </a>
        </p>
      </div>
    </footer>
  );
}
