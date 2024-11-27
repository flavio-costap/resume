import Image from 'next/image';
import brFlag from '../../public/icons/br.svg';
import usFlag from '../../public/icons/us.svg';
import { useLanguage } from '@/context/LanguageContext';

function TranslatorButton() {
  const { changeLocale, language } = useLanguage();

  return (
    <div className="animate-fadeInQuick lg:fixed">
      <Image
        src={language === 'br' ? brFlag : usFlag}
        alt="language-flags"
        onClick={() => changeLocale()}
        className="h-10 w-10 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-full"
      />
    </div>
  );
}

export default TranslatorButton;
