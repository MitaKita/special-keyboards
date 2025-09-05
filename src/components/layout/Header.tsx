import Link from "next/link";
import { LanguageSelector } from "../language-selector/LanguageSelector";

const Header = () => {
  const linkClass = 'text-white hover:text-yellow-300 transition-colors'
  return (
    <header className="bg-cyan-800 sticky top-0 z-50">
      <nav className="w-full px-4 py-3 flex items-center justify-center">
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/"
              className={linkClass}
            >Home</Link>
          </li>
          <li>
            <Link href="/keyboard"
              className={linkClass}
            >English Keyboard</Link>
          </li>
          <li>
            <Link href="/special/"
              className={linkClass}
            >All Special Characters</Link>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
