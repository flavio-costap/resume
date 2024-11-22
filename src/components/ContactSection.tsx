import { CodeBracketIcon, EnvelopeIcon, IdentificationIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";

function ContactSection() {
  return (
    <div className="flex flex-col">
      <span className="text-gray-700 uppercase font-bold tracking-wider mb-4">
        Contato
      </span>
      <ul className="space-y-2">
        <li className="flex flex-row space-x-2 items-center">
          <PhoneIcon className="w-5 h-5 text-blue-500" />
          <p>+55 61 9 9226 6856</p>
        </li>
				<li className="flex flex-row space-x-2 items-center">
          <EnvelopeIcon className="w-5 h-5 text-blue-500" />
          <p>flaviocosta12@gmail.com</p>
        </li>
				<li className="flex flex-row space-x-2 items-center">
          <IdentificationIcon className="w-5 h-5 text-blue-500" />
          <a href="https://www.linkedin.com/in/flavio-costap/" className="text-blue-500">flavio-costap</a>
        </li>
				<li className="flex flex-row space-x-2 items-center">
          <CodeBracketIcon className="w-5 h-5 text-blue-500" />
          <a href="https://github.com/flaviocostap" className="text-blue-500">flavio-costap</a>
        </li>
				<li className="flex flex-row space-x-2 items-center">
          <MapPinIcon className="w-5 h-5 text-blue-500" />
          <p>Brasília - DF - Brasil</p>
        </li>
      </ul>
    </div>
  );
}

export default ContactSection;
