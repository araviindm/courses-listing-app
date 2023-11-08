"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="w-full p-5">
      <nav>
        <div className="block">
          <ul className="flex justify-center h-auto">
            <li className="hover:text-sky-500 mr-2">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-sky-500">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
