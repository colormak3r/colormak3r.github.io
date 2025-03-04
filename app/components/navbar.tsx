export default function Navbar() {
    return (
      <nav className="flex items-center justify-between p-4 bg-mine-3 sticky top-0 shadow-md z-50">
        <div className="text-xl font-bold text-mine-5 border rounded-md p-4">
          Khoa Nguyen's Portfolio
        </div>
        <div className="flex flex-row space-x-4">
          <a
            href="/"
            className="text-mine-5 font-semibold hover:text-stone-900"
          >
            About Me
          </a>
          <p className="text-mine-5 font-semibold">•</p>
          <a
            //href="/about"
            className="text-mine-5 font-semibold hover:text-stone-900"
          >
            Showcases
          </a>
          <p className="text-mine-5 font-semibold">•</p>
          <a
            //href="/employee"
            className="text-mine-5 font-semibold hover:text-stone-900"
          >
            Resume
          </a>
        </div>
      </nav>
    );
  }