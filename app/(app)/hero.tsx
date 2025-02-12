import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center h-screen px-4 bg-primaryBackground">
      <div className="flex flex-col items-center md:flex-row lg:justify-center">
        <div className="flex flex-col gap-y-4 lg:w-1/2">
          <h2 className="xs:text-5xl m:text-6xl font-bold lg:w-1/2">
            <span className="text-emphasis">Music</span> for everyone
          </h2>
          <p className="lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quam suscipit ducimus, eveniet voluptates sapiente.
          </p>
          <div className="flex justify-center p-4 md:justify-start gap-x-2 lg:p-0">
            <Button className="lg:rounded-full">
              <span>Download now</span>
            </Button>
            <Button variant="trial" className="lg:rounded-full">
              <span>Start free trial</span>
            </Button>
          </div>
        </div>
        <Image src="/banda.png" alt="banda" width={400} height={400} />
      </div>
    </section>
  );
};
