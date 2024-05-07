export default function Footer() {
  return (
    <footer className="flex flex-col backdrop-filter backdrop-blur bg-opacity-5 bg-white">
      <div className="flex p-24 justify-between items-center ">
        <div className="flex flex-col gap-3 w-[350px]">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
            <h3 className="text-lg font-bold text-secondary">GreenBank</h3>
          </div>
          <p className="text-muted-foreground text-md">
            Discover the power of our secure and rewarding credit cards
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-secondary">About us</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-muted-foreground text-md">Our Story</li>
            <li className="text-muted-foreground text-md">Our Team</li>
            <li className="text-muted-foreground text-md">Careers</li>
            <li className="text-muted-foreground text-md">Careers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-secondary">Prodcuts</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-muted-foreground text-md">Credits Card</li>
            <li className="text-muted-foreground text-md">Gift Cards </li>
            <li className="text-muted-foreground text-md">Savings account</li>
            <li className="text-muted-foreground text-md">NFT</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-secondary">Useful Links</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-muted-foreground text-md">Free rewards</li>
            <li className="text-muted-foreground text-md">Documentation</li>
            <li className="text-muted-foreground text-md">
              Affliation program
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 pr-44">
          <h3 className="text-lg font-bold text-secondary">Social</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-muted-foreground text-md">Change log</li>
            <li className="text-muted-foreground text-md">Licence</li>
            <li className="text-muted-foreground text-md">Site Maps</li>
            <li className="text-muted-foreground text-md">News</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center px-24">
        <p className="text-muted-foreground text-md p-4">
          © 2021 GreenBank. All rights reserved
        </p>
        <p className="text-muted-foreground text-md p-4">
          This page uses cookies. See cookies details here
        </p>
      </div>
    </footer>
  );
}
