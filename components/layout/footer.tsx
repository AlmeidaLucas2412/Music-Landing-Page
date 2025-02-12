export const Footer = () => {
  return (
    <footer className="flex flex-col px-4 py-8 bg-primaryBackground lg:flex-row lg:gap-x-12 lg:justify-center lg:items-center">
      <div className="flex flex-col gap-y-10 md:flex-row md:justify-around lg:gap-x-10">
        <ul className="flex flex-col text-sm gap-y-4">
          <span className="text-lg font-semibold uppercase">About us</span>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Our story
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              History
            </a>
          </li>
        </ul>
        <ul className="flex flex-col text-sm gap-y-4">
          <span className="text-lg font-semibold uppercase">Products</span>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Music
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Subscription
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Custom Music
            </a>
          </li>
        </ul>
        <ul className="flex flex-col text-sm gap-y-4">
          <span className="text-lg font-semibold uppercase">Playlist</span>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Newsletter
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Careers
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 hover:text-emphasis">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col py-4 gap-y-1 md:ml-16">
        <h1 className="text-2xl font-bold tracking-wide text-emphasis ">
          Moon<span className="text-background">Music</span>
        </h1>
        <span className="text-xs text-gray-500">
          Copyright ©2025 All rights reserved
        </span>
      </div>
    </footer>
  );
};
