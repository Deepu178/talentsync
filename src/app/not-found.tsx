"use client";
import UnstyledLink from "@/components/links/UnstyledLink";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-3 pt-16 bg-background text-foreground">
      <div className="w-full max-w-md mx-auto ">
        <img
          src="/core/crashed-error.svg"
          alt="error"
          className="relative z-10 w-full"
        />
      </div>
      <h1 className="text-foreground heading">404</h1>
      <p className="max-w-md text-center">
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <Button variant="outline" role="button" asChild>
        <UnstyledLink href="/">Home</UnstyledLink>
      </Button>
    </main>
  );
}
