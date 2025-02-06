import { Button } from "@/components/ui/button";
import { Hero } from "./hero";
import { StepSection } from "./step-section";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-4 py-8 flex flex-col">
        <div className="flex flex-col gap-y-8">
          <h2 className="text-5xl text-primaryBackground font-semibold">
            Unlimited Acess to 100k tracks
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            impedit. Sunt ratione quis, quia voluptatem ipsum voluptatum qui in
            blanditiis vero dolor laborum quisquam maiores doloremque fugiat
            obcaecati numquam eaque.
          </p>
          <Button className="p-6 self-center rounded-full">
            <span>Try it now</span>
          </Button>
        </div>
      </section>
      <StepSection />
    </>
  );
}
