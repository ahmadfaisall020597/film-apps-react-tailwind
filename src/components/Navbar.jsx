export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6 opacity-25 hover:opacity-25">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">FILM APPS</span>
        </div>
        <div className="block lg:hidden">
        </div>
        <div className="w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Trending
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Super Hero
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
