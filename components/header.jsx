import React from "react";
import Link from "next/link";
import AuthButtons from "@/components/AuthButtons";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b backdrop-blur-md z-50 supports-[backdrop-filter]:bg-emerald-900/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Mentra Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>
       <div className="flex gap-6">
         <AuthButtons />
        </div>
      </div>
    </header>
  );
}
