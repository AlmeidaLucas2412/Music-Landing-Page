import { InfoCard } from "@/components/info-card";

export const PremiumSection = () => {
  return (
    <section
      className="flex flex-col justify-center px-4 py-8 xl:px-6"
      id="premium"
    >
      <div className="flex flex-col gap-y-6">
        <h2 className="text-5xl font-semibold text-primaryBackground md:text-6xl">
          Why go Premium
        </h2>
        <p className="text-gray-500">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-around w-[75%] self-center lg:flex-nowrap lg:w-full">
          <InfoCard
            image="/no-interruption.jpg"
            title="No ad interruptions"
            description="Consectetur adipiscing elit"
            fullRounded
          />
          <InfoCard
            image="/high-quality.jpg"
            title="High Quality"
            description="Ectetur adipiscing elit"
            fullRounded
          />
          <InfoCard
            image="/offline.jpg"
            title="Listen Offline"
            description="Sed do eiusmod tempor"
            fullRounded
          />
          <InfoCard
            image="/download.jpg"
            title="Download Music"
            description="Adipiscing elit"
            fullRounded
          />
        </div>
      </div>
    </section>
  );
};
