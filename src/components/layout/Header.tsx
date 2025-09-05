import Link from "next/link";
import { Maths_param } from "@/constants/language";
import { LanguageSelector } from "../Selectors/LanguageSelector";
import { EmojiSelector } from "../Selectors/EmojiSelector";

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
            <Link href="/special-latin/"
              className={linkClass}
            >Special Latin Characters</Link>
          </li>
          <li>
            <Link href={`/keyboard/${Maths_param}`}
              className={linkClass}
            >Math Keyboard</Link>
          </li>
          <li>
            <LanguageSelector />
          </li>
          <li>
            <EmojiSelector />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
