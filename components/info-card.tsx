import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description?: string;
  fullRounded?: boolean;
};

export const InfoCard = ({ image, title, description, fullRounded }: Props) => {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <Image
        src={image}
        alt="image"
        width={fullRounded ? 180 : 250}
        height={fullRounded ? 180 : 250}
        className={cn("rounded-[20%]", fullRounded && "rounded-full")}
      />
      <span className="text-xl font-semibold text-primaryBackground">
        {title}
      </span>
      {description && <span className="text-gray-500">{description}</span>}
    </div>
  );
};
