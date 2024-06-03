import { ReactNode } from "react";

export const UseCaseCard = (props: {
  imageUrl?: string;
  title?: ReactNode;
  description?: ReactNode;
}) => {
  const { imageUrl, title, description } = props;
  return (
    <div className="h-full bg-neutral-12/20 border border-[#cecefb0d] backdrop-blur rounded-2xl overflow-hidden">
      <img alt="usecase" src={imageUrl} className="w-full" />
      <div className="p-10 text-white">
        <strong className="text-lg">{title}</strong>
        <p className="text-paragraph gap-4 flex flex-col mt-4">{description}</p>
      </div>
    </div>
  );
};
