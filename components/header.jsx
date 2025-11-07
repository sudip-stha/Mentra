import React from "react";
import { Button } from "./ui/button";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,

} from "@clerk/nextjs";

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
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>
       <div className="flex gap-6">
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        </div> 
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                  userButtonPopoverFooter: { display: "none" },
                 
                },
              }}
              afterSignOutUrl="/"
            />
            
          </SignedIn>
        
      </div>
    </header>
  );
}
