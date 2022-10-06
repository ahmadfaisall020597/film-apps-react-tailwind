export default function NavBar() {
  return (
      <nav className="flex items-center justify-between bg-black p-6 opacity-25 hover:opacity-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">FILM APPS</span>
        </div>
        <div className="lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#trending"
              className="mt-4 lg:inline-block lg:mt-0 text-teal-300 hover:text-white mr-4"
            >
              Trending
            </a>
            <a
              href="#responsive-header"
              className="mt-4 lg:inline-block lg:mt-0 text-teal-300 hover:text-white mr-4"
            >
              Super Hero
            </a>
          </div>
        </div>
      </nav>
  );
}
