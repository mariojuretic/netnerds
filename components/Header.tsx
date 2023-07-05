import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-8">
      <Link href="/" className="relative h-12 w-52">
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
