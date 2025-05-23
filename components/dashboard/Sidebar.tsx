'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Pizza } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center pl-2.5 mb-5">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pizza Dashboard
          </span>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                isActive("/dashboard") ? "bg-gray-100 dark:bg-gray-700" : ""
              }`}
            >
              <Home className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/orders"
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                isActive("/dashboard/orders") ? "bg-gray-100 dark:bg-gray-700" : ""
              }`}
            >
              <Pizza className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Pizza Orders</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}