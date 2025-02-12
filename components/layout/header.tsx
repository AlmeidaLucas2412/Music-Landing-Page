"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-header">
      <nav className="flex flex-col p-4 text-sm xl:flex-row xl:justify-between">
        <div className="flex items-center justify-between xl:justify-normal">
          <h1 className="text-2xl font-bold tracking-wide text-emphasis ">
            Moon<span className="text-background">Music</span>
          </h1>
          <button className="p-2 xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="size-6" stroke="white" />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } xl:flex xl:items-center xl:px-2`}
        >
          <ul className="flex flex-col gap-2 font-semibold xl:gap-8 xl:flex-row">
            <li className="hover:text-emphasis">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-emphasis">
              <a href="#">Concepts</a>
            </li>
            <li className="hover:text-emphasis">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-emphasis">
              <a href="#t">Premium</a>
            </li>
          </ul>
          <div className="flex justify-center w-full p-2 gap-y-2 gap-x-1 xl:flex-row">
            <Button className={cn("font-semibold xl:ml-4", isOpen && "w-full")}>
              Create an account
            </Button>
            <Button
              className={cn("font-semibold xl:ml-4", isOpen && "w-full")}
              variant="trial"
            >
              Login
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
