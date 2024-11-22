import {
    AcademicCapIcon,
  BriefcaseIcon,
  IdentificationIcon,
  LanguageIcon,
  TrophyIcon,
} from "@heroicons/react/16/solid";
import { RefObject } from "react";
import { RefsProps } from "./MainCard";

function SelectInfoSection({ refs }: { refs: RefsProps }) {
  const handleButtonClick = (sectionRef: RefObject<HTMLDivElement>) => {
    if (sectionRef && sectionRef.current) {
        const offsetTop = sectionRef.current.getBoundingClientRect().top + window.scrollY - 32;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
  };

  return (
    <div className="flex flex-row justify-around">
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2"
        onClick={() => handleButtonClick(refs.aboutRef)}
      >
        <IdentificationIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2"
        onClick={() => handleButtonClick(refs.experienceRef)}
      >
        <BriefcaseIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2"
        onClick={() => handleButtonClick(refs.academicRef)}
      >
        <AcademicCapIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2"
        onClick={() => handleButtonClick(refs.certificationsRef)}
      >
        <TrophyIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2"
        onClick={() => handleButtonClick(refs.languagesRef)}
      >
        <LanguageIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default SelectInfoSection;
