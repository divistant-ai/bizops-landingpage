"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavbarLogo: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const logoSrc
    = mounted && resolvedTheme === "dark"
      ? "/assets/images/Logo BizOps - Dark.svg"
      : "/assets/images/Logo BizOps - Light.svg";

  return (
    <div className="flex flex-shrink-0 items-center">
      <Link
        href="/"
        className="group focus-visible:ring-primary-500 flex items-center rounded-lg transition-all duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        aria-label="BizOps Homepage"
      >
        {mounted
          ? (
              <Image
                src={logoSrc}
                alt="BizOps Logo"
                width={120}
                height={40}
                className="-mt-1 h-9 w-auto transition-all duration-200 group-hover:scale-105 group-active:scale-95"
                priority
              />
            )
          : (
              <div className="h-10 w-[120px]" />
            )}
      </Link>
    </div>
  );
};

export default NavbarLogo;
