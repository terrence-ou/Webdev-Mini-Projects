"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Idead, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Note</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Note is the connected workspace where <br />
        better, faster work happend
      </h3>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Note <ArrowRight className="h-4 w-4 ml-2" />{" "}
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Note for Free
            <ArrowRight />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
