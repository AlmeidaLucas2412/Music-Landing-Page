import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const StepCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-end relative">
        <div className="w-12 h-12 bg-emphasis rounded-full">{""}</div>
        <Icon
          stroke="white"
          className="shrink-0 size-10 absolute left-6"
          strokeWidth={1.2}
        />
      </div>
      <span className="text-2xl font-semibold">{title}</span>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};
