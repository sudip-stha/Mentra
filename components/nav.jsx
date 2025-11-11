"use client";

import { PenBox, LayoutDashboard, FileText, GraduationCap } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleNavigation = (e, path) => {
    if (pathname === path) return;

    e.preventDefault();
    setIsLoading(true);
    router.push(path);
  };

  return (
    <div className="relative">
      {isLoading && (
        <BarLoader className="absolute top-16 " width={"100%"} color="green" />
      )}

      <div className=" w-1/2 mt-20"></div>

      <SignedIn>
        <div className=" w-1/2 flex items-center justify-center gap-10 flex-col md:flex-row text-sm  bg-white mx-auto rounded-3xl px-2 py-1">
          <Link
            href="/dashboard"
            onClick={(e) => handleNavigation(e, "/dashboard")}
            className={`flex items-center gap-2 navHover ${
              pathname === "/dashboard" ? "navActive" : ""
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Industry Insights
          </Link>

          <Link
            href="/resume"
            onClick={(e) => handleNavigation(e, "/resume")}
            className={`flex items-center gap-2 navHover ${
              pathname === "/resume" ? "navActive" : ""
            }`}
          >
            <FileText className="h-4 w-4" />
            Build Resume
          </Link>

          <Link
            href="/ai-cover-letter"
            onClick={(e) => handleNavigation(e, "/ai-cover-letter")}
            className={`flex items-center gap-2 navHover ${
              pathname === "/ai-cover-letter" ? "navActive" : ""
            }`}
          >
            <PenBox className="h-4 w-4" />
            Cover Letter
          </Link>

          <Link
            href="/interview"
            onClick={(e) => handleNavigation(e, "/interview")}
            className={`flex items-center gap-2 navHover ${
              pathname === "/interview" ? "navActive" : ""
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Interview Prep
          </Link>
        </div>
      </SignedIn>
    </div>
  );
};

export default NavBar;
