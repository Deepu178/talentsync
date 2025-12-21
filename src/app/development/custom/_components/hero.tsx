import { Play } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const CustomHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-primary/10">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="font-semibold">
                Collaborate remotely, with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <span className="relative z-10">Postcrafts.</span>
                </div>
              </h1>

              <p className="mt-8 text-base text-muted-foreground sm:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Button className="px-10 py-4" size="lg">
                  Start exploring
                </Button>

                <Button variant="ghost" className="px-10 py-4" size="lg">
                  <Play size={20} className="mr-3" />
                  Watch video
                </Button>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomHero;
