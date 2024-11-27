import { useLanguage } from "@/context/LanguageContext";
import { LanguageIcon } from "@heroicons/react/16/solid";

function LanguagesSection() {
  const { language } = useLanguage();

  const languages = {
    br: [
      {
        name: "Inglês",
        level: "B2 - Intermediário avançado",
        progress: "60%",
      },
      {
        name: "Espanhol",
        level: "B1 - Intermediário",
        progress: "25%",
      },
      {
        name: "Japonês",
        level: "A2 - Básico",
        progress: "10%",
      },
    ],
    en: [
      {
        name: "English",
        level: "B2 - Upper-Intermediate",
        progress: "60%",
      },
      {
        name: "Spanish",
        level: "B1 - Intermediate",
        progress: "25%",
      },
      {
        name: "Japanese",
        level: "A2 - Elementary",
        progress: "10%",
      },
    ],
  };

  const currentLanguage = language === "br" ? languages.br : languages.en;

  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-8">
        <LanguageIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">
          {language === "br" ? "Línguas" : "Languages"}
        </h2>
      </div>
      <div className="space-y-6">
        {currentLanguage.map((lang, index) => (
          <div key={index}>
            <div className="flex flex-row mb-2 space-x-2">
              <b>{lang.name}</b>
              <p>{lang.level}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center h-2 p-0.5 leading-none rounded-full"
                style={{ width: lang.progress }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LanguagesSection;
