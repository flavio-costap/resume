import { useVisitor } from "@/context/VisitorContext";
import { EyeIcon } from "@heroicons/react/16/solid";

function VisitorCard() {
  const { visitorCount } = useVisitor();
  return (
    <div className="text-white bg-blue-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm py-2.5 px-3.5 mb-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-row items-center w-fit space-x-2 h-10 bottom-0 lg:fixed cursor-default" data-tooltip-target="tooltip-visitors">
      <EyeIcon className="w-6 h-6 text-white" />
      <p className="mb-[1.8px]">{visitorCount}</p>
    </div>
  );
}

export default VisitorCard;
