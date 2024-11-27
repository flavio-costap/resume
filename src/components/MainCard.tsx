import Image from "next/image";
import profileImage from "../../public/images/profileImage.jpeg";
import SectionDivider from "./SectionDivider";
import ContactSection from "./ContactSection";
import SelectInfoSection from "./SelectInfoSection";
import { RefObject } from "react";
import { useLanguage } from "@/context/LanguageContext";
import TranslatorButton from "./TranslatorButton";

export interface RefsProps {
  aboutRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  certificationsRef: RefObject<HTMLDivElement>;
  languagesRef: RefObject<HTMLDivElement>;
  academicRef: RefObject<HTMLDivElement>;
}

function MainCard({ refs }: { refs: RefsProps }) {
  const { language } = useLanguage();
  return (
    <div className="bg-white shadow rounded-lg p-6 lg:fixed lg:max-h-screen lg:top-8 lg:pt-8 lg:pb-8 animate-fadeInQuick">
      <div className="flex flex-col items-center">
        <div className="w-40 h-60 sm:h-40 mb-4 relative">
          <Image
            src={profileImage}
            alt="Profile Image"
            fill
            className="rounded-lg object-cover bg-gray-300 shrink-0 shadow-md"
          />
        </div>
          <div className="absolute top-11 right-8 sm:hidden lg:hidden">
            <TranslatorButton />
          </div>

        <h1 className="text-xl font-bold text-center">
          Flávio da Costa Paixão
        </h1>
        <p className="text-gray-700 text-center">
          {language === "br" ? "Engenheiro de Software" : "Software Engineer"}
        </p>
      </div>

      <SectionDivider />
      <ContactSection />

      <SectionDivider />
      <SelectInfoSection refs={refs} />
    </div>
  );
}

export default MainCard;
