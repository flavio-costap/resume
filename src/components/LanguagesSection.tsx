import { LanguageIcon } from "@heroicons/react/16/solid";

function LanguagesSection() {
  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-8">
        <LanguageIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">Línguas</h2>
      </div>
      <div className="space-y-6">
        <div className="flex flex-row space-x-2">
          <b>Inglês - </b>
          <p>Intermediário</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>

        <div className="flex flex-row space-x-2">
          <b>Espanhol - </b>
          <p>Intermediário</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>

        <div className="flex flex-row space-x-2">
          <b>Japonês - </b>
          <p>Básico</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: "10%" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default LanguagesSection;
