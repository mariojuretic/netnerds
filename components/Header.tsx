import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between space-y-4 px-8 py-4 sm:flex-row sm:space-x-8 sm:space-y-0 md:py-8">
      <Link href="/" className="relative h-11 w-48 md:h-12 md:w-52">
        <Image
          src={logo}
          alt="Logo"
          fill
          className="object-contain object-center"
        />
      </Link>

      <Link
        href="https://www.weblio.hr/"
        target="_blank"
        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-sky-500 md:text-base"
      >
        Sign up for our newsletter
      </Link>
    </header>
  );
}
