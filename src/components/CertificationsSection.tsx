import { certifications } from "@/utils/certifications";
import { TrophyIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

function CertificationsSection() {
  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-8">
        <TrophyIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">Certificados</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((certification, index) => (
          <Link
            href={certification.link}
            target="_blank"
            key={index}
            aria-label={`Ver certificado: ${certification.title} por ${certification.organization}`}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-row justify-between space-x-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {certification.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {certification.organization}
                </p>
              </div>
              <Image
                src={certification.logo}
                alt={`${certification.organization}-logo`}
                className="h-12 w-12"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Período:</span>{" "}
                {certification.period}
              </p>
            </div>
            {certification.skills && certification.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full px-3 py-1.5 text-xs cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default CertificationsSection;
