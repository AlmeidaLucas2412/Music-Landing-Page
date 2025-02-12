import { Button } from "@/components/ui/button";
import { Hero } from "./hero";
import { StepSection } from "./step-section";
import { ConceptSection } from "./concept-section";
import { SubscriptionSection } from "./subscription-section";
import { PremiumSection } from "./premium-section";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-col px-4 py-8 md:py-16 xl:px-6 lg:py-16">
        <div className="flex flex-col gap-y-8 xl:flex-row xl:py-8">
          <h2 className="text-5xl font-semibold text-primaryBackground md:text-6xl xl:w-1/2">
            Unlimited Acess to 100k tracks
          </h2>
          <div className="flex flex-col gap-y-4 xl:w-1/3">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              impedit. Sunt ratione quis, quia voluptatem ipsum voluptatum qui
              in blanditiis vero dolor laborum quisquam maiores doloremque
              fugiat obcaecati numquam eaque.
            </p>
            <Button className="self-center p-6 rounded-full lg:p-8">
              <span>Try it now</span>
            </Button>
          </div>
        </div>
      </section>
      <StepSection />
      <ConceptSection />
      <SubscriptionSection />
      <PremiumSection />
    </>
  );
}
