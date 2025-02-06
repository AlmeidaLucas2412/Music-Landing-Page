import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-primaryBackground h-screen flex flex-col px-4 justify-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-6xl font-bold">
            <span className="text-emphasis">Music</span> for everyone
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quam suscipit ducimus, eveniet voluptates sapiente.
          </p>
          <div className="flex justify-center md:justify-start p-4 gap-x-2">
            <Button>
              <span>Download now</span>
            </Button>
            <Button variant="trial">
              <span>Start free trial</span>
            </Button>
          </div>
        </div>
        <Image src="/banda.png" alt="banda" width={400} height={400} />
      </div>
    </section>
  );
};
