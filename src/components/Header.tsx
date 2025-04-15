"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { usePathname, useRouter } from "@/i18n/navigation";

import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { routing } from "@/i18n/routing";
import Image from "next/image";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={siteDetails.siteLogo}
              alt="logo"
              width={32}
              height={32}
            />
            <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
              {siteDetails.siteName}
            </span>
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {/* Locale Switcher */}
            <li className="flex space-x-2">
              {routing.locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => changeLocale(locale)}
                  className={`text-sm px-2 py-1 rounded ${
                    pathname.startsWith(`/${locale}`)
                      ? "bg-primary text-black"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </li>
          </ul>
        </nav>
      </Container>
      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {/* Mobile Locale Switcher */}
            <li>
              <div className="flex flex-row space-x-2 py-2">
                {routing.locales.map((locale) => (
                  <button
                    key={locale}
                    onClick={() => {
                      changeLocale(locale);
                      toggleMenu();
                    }}
                    className={`text-sm px-2 py-1 rounded ${
                      pathname.startsWith(`/${locale}`)
                        ? "bg-primary text-black"
                        : "text-foreground hover:bg-gray-100"
                    }`}
                  >
                    {locale.toUpperCase()}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
