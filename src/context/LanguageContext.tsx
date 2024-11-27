import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextType {
  language: "br" | "en";
  changeLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"br" | "en">("br");

  const changeLocale = () => {
    setLanguage(language === "br" ? "en" : "br");
  };

  return (
    <LanguageContext.Provider value={{ language, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
