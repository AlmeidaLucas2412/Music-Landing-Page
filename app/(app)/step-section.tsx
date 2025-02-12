import { StepCard } from "@/components/step-card";
import { FileVolume, MousePointerClick, UserRoundPen } from "lucide-react";

export const StepSection = () => {
  return (
    <section className="flex flex-col justify-center px-4 lg:px-6 py-8 bg-primaryBackground md:py-16">
      <h2 className="py-4 mb-8 text-5xl font-semibold md:text-6xl">
        How it works
      </h2>
      <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4 xl:px-6">
        <StepCard
          icon={UserRoundPen}
          title="Create an account"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        />
        <StepCard
          icon={MousePointerClick}
          title="Choose a plan"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        />
        <StepCard
          icon={FileVolume}
          title="Download Music"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        />
      </div>
    </section>
  );
};
