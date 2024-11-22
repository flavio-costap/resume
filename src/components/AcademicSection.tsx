import Image from "next/image";
import unbLogo from "../../public/images/unbLogo.png";
import { AcademicCapIcon } from "@heroicons/react/16/solid";

function AcademicSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-3 items-center mb-8">
        <AcademicCapIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">Formação  Acadêmica</h2>
      </div>
      <p className="text-gray-700 font-semibold mb-3">
        Bacharelado, Engenharia de Software
      </p>
      <div className="flex flex-row items-center space-x-2 mb-3">
        <Image src={unbLogo} alt="unb-logo" className="h-5 w-8 rounded-sm" />
        <p className="text-gray-700">Universidade de Brasília - UNB</p>
      </div>
      <p className="text-blue-500">2012 - 2018</p>
    </div>
  );
}

export default AcademicSection;
