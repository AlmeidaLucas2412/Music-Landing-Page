import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const SubscriptionSection = () => {
  return (
    <section
      className="flex flex-col justify-center px-4 py-8 bg-primaryBackground xl:px-6"
      id="pricing"
    >
      <div className="flex flex-col gap-y-4">
        <h2 className="m:text-5xl font-semibold xs:text-[2.5rem] md:text-6xl">
          Subscription from $15/month
        </h2>
        <span className="text-2xl font-semibold text-emphasis">
          Start a free trial now
        </span>
        <p className="text-gray-500">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Button className="p-8 my-8 rounded-full w-fit">
        <span className="uppercase">Try it now</span>
      </Button>
      <div className="flex flex-col p-8 rounded-xl bg-secondary/10">
        <ul className="flex flex-col gap-y-6">
          <li className="relative flex gap-x-2">
            <div className="absolute w-3 h-3 rounded-full bg-emphasis bottom-2">
              {""}
            </div>
            <Check className="z-50" strokeWidth={1.8} />
            Play any track
          </li>
          <li className="relative flex gap-x-2">
            <div className="absolute w-3 h-3 rounded-full bg-emphasis bottom-2">
              {""}
            </div>
            <Check className="z-50" strokeWidth={1.8} />
            Listen offline
          </li>
          <li className="relative flex gap-x-2">
            <div className="absolute w-3 h-3 rounded-full bg-emphasis bottom-2">
              {""}
            </div>
            <Check className="z-50" strokeWidth={1.8} />
            No ad interruptions
          </li>
          <li className="relative flex gap-x-2">
            <div className="absolute w-3 h-3 rounded-full bg-emphasis bottom-2">
              {""}
            </div>
            <Check className="z-50" strokeWidth={1.8} />
            Unlimited skips
          </li>
          <li className="relative flex gap-x-2">
            <div className="absolute w-3 h-3 rounded-full bg-emphasis bottom-2">
              {""}
            </div>
            <Check className="z-50" strokeWidth={1.8} />
            High quality audio
          </li>
          <li className="relative flex gap-x-2">
            <div className="absolute w-3 h-3 rounded-full bg-emphasis bottom-2">
              {""}
            </div>
            <Check className="z-50" strokeWidth={1.8} />
            Shuffle play
          </li>
        </ul>
      </div>
    </section>
  );
};
