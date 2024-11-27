import { useRef } from "react";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import LanguagesSection from "@/components/LanguagesSection";
import MainCard from "@/components/MainCard";
import AcademicSection from "@/components/AcademicSection";
import TranslatorButton from "./TranslatorButton";
// import VisitorCard from "./VisitorCard";

export default function HomeSection() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const certificationsRef = useRef(null);
  const languagesRef = useRef(null);
  const academicRef = useRef(null);

  const refs = {
    aboutRef,
    experienceRef,
    certificationsRef,
    languagesRef,
    academicRef,
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <div className="container mx-auto py-8 px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <MainCard refs={refs} />
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div
              ref={aboutRef}
              id="about"
              className="bg-white shadow rounded-lg p-6 animate-fadeInMedium"
            >
              <AboutSection />
            </div>
            <div
              ref={experienceRef}
              id="experience"
              className="bg-white shadow rounded-lg p-6 animate-fadeInSlow"
            >
              <ExperienceSection />
            </div>
            <div
              ref={academicRef}
              id="academic"
              className="bg-white shadow rounded-lg p-6 animate-fadeInSlow"
            >
              <AcademicSection />
            </div>
            <div
              ref={certificationsRef}
              id="certifications"
              className="bg-white shadow rounded-lg p-6 animate-fadeInSlow"
            >
              <CertificationsSection />
            </div>
            <div
              ref={languagesRef}
              id="languages"
              className="bg-white shadow rounded-lg p-6 animate-fadeInSlow"
            >
              <LanguagesSection />
            </div>
          </div>
          <div className="lg:col-span-1 hidden lg:block">
            <TranslatorButton />
            {/* <VisitorCard/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
