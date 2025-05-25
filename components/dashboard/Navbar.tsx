'use client';

import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Menu, X, LogOut, User as UserIcon } from "lucide-react";

interface NavbarProps {
  user: User;
}

export default function Navbar({ user }: NavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/auth/signin" });
  };

  return (
    <nav className="ml-64 h-16 bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50 md:left-64">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            {showMobileMenu ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white md:hidden">
            Pizza Dashboard
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center ml-3">
            <div className="relative">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <div className="font-medium dark:text-white">
                    <div>{user?.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center justify-center p-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}