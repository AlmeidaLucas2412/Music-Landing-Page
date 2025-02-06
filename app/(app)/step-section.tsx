import { StepCard } from "@/components/step-card";
import { FileVolume, MousePointerClick, UserRoundPen } from "lucide-react";

export const StepSection = () => {
  return (
    <section className="bg-primaryBackground flex flex-col px-4 py-8 justify-center">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-5xl font-semibold">How it works</h2>
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
