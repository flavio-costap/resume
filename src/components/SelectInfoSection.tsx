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
        className="text-white bg-blue-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        aria-label="about"
        onClick={() => handleButtonClick(refs.aboutRef)}
      >
        <IdentificationIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        aria-label="experience"
        onClick={() => handleButtonClick(refs.experienceRef)}
      >
        <BriefcaseIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        aria-label="academic"
        onClick={() => handleButtonClick(refs.academicRef)}
      >
        <AcademicCapIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        aria-label="certifications"
        onClick={() => handleButtonClick(refs.certificationsRef)}
      >
        <TrophyIcon className="w-6 h-6 text-white" />
      </button>
      <button
        type="button"
        className="text-white bg-blue-500 focus:outline-none focus:ring-4 font-medium rounded-full text-sm p-2.5 text-center me-2 mb-2 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        aria-label="languages"
        onClick={() => handleButtonClick(refs.languagesRef)}
      >
        <LanguageIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default SelectInfoSection;
