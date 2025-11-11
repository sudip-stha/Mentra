"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full pt-16 pb-20">
      <div className="space-y-2 text-center">
        <div className="inline-flex items-center justify-center w-36 h-36 mb-8 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100">
          <GraduationCap
            className="w-28 h-28 text-emerald-800"
            strokeWidth={2}
          />
        </div>
        <div className="space-y-20 mx-auto">
          <h1 className="text-2xl font-bold md:text-3xl  animate-gradient">
            Level Up Your Career with AI
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
