import ModeToggle from "@/components/toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-lg font-bold">
            Thread IT
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="#dienstleistungen" className="hover:underline">Dienstleistungen</Link>
            </li>
            <li>
              <Link href="#preisliste" className="hover:underline">Preisliste</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Kontakt</Link>
            </li>
          </ul>
          <ModeToggle />
        </div>
          
      </nav>
    </header>
  );
}