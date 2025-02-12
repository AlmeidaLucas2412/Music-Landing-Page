import { InfoCard } from "@/components/info-card";

export const ConceptSection = () => {
  return (
    <section
      className="flex flex-col justify-center px-4 py-8 xl:px-6"
      id="concepts"
    >
      <div className="flex flex-col gap-y-6">
        <h2 className="text-5xl font-semibold text-primaryBackground md:text-6xl">
          Our concept & artists
        </h2>
        <p className="text-gray-500">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-around lg:flex-nowrap lg:gap-x-4">
          <InfoCard image="/soul.jpg" title="Soul Music" />
          <InfoCard image="/live.jpg" title="Live Concerts" />
          <InfoCard image="/dj.jpg" title="Dj Sets" />
          <InfoCard image="/streams.jpg" title="Live Streams" />
        </div>
      </div>
    </section>
  );
};
