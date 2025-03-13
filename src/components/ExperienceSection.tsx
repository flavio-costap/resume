import { useLanguage } from "@/context/LanguageContext";
import { experiencesType } from "@/types/ExperienceTypes";
import { experiencesBr, experiencesEn } from "@/utils/exeriences";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function ExperienceSection() {
  const { language } = useLanguage();
  const [dataLanguage, setDataLanguage] = useState<experiencesType>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  useEffect(() => {
    setDataLanguage(language === "br" ? experiencesBr : experiencesEn);
  }, [language]);

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-8">
        <BriefcaseIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">
          {language === "br"
            ? "Experiência Profissional"
            : "Professional Experience"}
        </h2>
      </div>
      {dataLanguage.map((exp, index) => (
        <div key={index} className="mb-10">
          <div className="flex justify-between flex-wrap gap-2 w-full">
            <span className="text-gray-700 font-bold">{exp.company}</span>
            <p>
              <span className="text-gray-700 mr-2">{exp.role} |</span>
              <span className="text-gray-700">{exp.period}</span>
            </p>
          </div>
          <ul className="list-none mt-2 space-y-2">
            {exp.descriptions.map((desc, descIndex) => (
              <>
                <li key={descIndex} className="text-gray-700 flex">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2 mt-2.5 shrink-0"></span>
                  <span>{desc}</span>
                  <button
                    onClick={() => toggleDescription(descIndex)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${
                        expandedIndex === descIndex ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </li>
                {descIndex === 0 && expandedIndex === index && exp.sub && (
                  <ul className="mt-2 ml-8 text-gray-600 list-disc">
                    {exp.sub.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
          {exp.skills && exp.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full px-3 py-1.5 text-xs cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default ExperienceSection;
