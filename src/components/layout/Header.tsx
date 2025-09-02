import Link from "next/link";

const Header = () => {
  const linkClass = 'text-white hover:text-yellow-300 transition-colors'
  return (
    <header className="bg-cyan-800">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex space-x-6">
          <li>
            <Link href="/"
              className={linkClass}
            >Home</Link>
          </li>
          <li>
            <Link href="/about"
              className={linkClass}
            >About</Link>
          </li>
          <li>
            <Link href="/dashboard"
              className={linkClass}
            >Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
