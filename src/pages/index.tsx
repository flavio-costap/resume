import Image from "next/image";
import profileImage from "../../public/images/profileImage.jpeg";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Image
                  src={profileImage}
                  className="w-40 rounded-lg bg-gray-300 mb-4 shrink-0 shadow-md"
                  alt={"profile=img"}
                />

                <h1 className="text-xl font-bold">Flávio da Costa Paixão</h1>
                <p className="text-gray-700">Engenheiro de Software</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Contato
                </span>
                <ul>
                  <li className="mb-2">+55 61 9 9226 6856</li>
                  <li className="mb-2">flaviocosta12@gmail.com</li>
                  <li className="mb-2">flavio-costap</li>
                  <li className="mb-2">Brasília - DF</li>
                </ul>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Formação Acadêmica
                </span>
                <ul>
                  <li className="mb-2">Bacharelado, Engenharia de Software</li>
                  <li className="mb-2">Universidade de Brasília - UNB</li>
                  <li className="mb-2">2006 - 2008</li>
                </ul>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">Tailwind Css</li>
                </ul>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Línguas
                </span>
                <ul>
                  <li className="mb-2">Inglés - Intermadiário</li>
                  <li className="mb-2">Espanhol - Básico</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Sobre mim </h2>
              <p className="text-gray-700">
                Engenheiro de software com sólida experiência em desenvolvimento
                web, especializado em front-end com React, Next.js e Vue.js.
                Expertise na criação de interfaces responsivas, intuitivas e
                escaláveis, focadas em proporcionar uma excelente experiência ao
                usuário. Conhecimento avançado em Node.js, Docker, CI/CD, bancos
                de dados e integração com APIs. Experiência com testes
                automatizados, incluindo unitários com Jest, garantindo
                qualidade e eficiência nas entregas. Sempre em busca de
                inovações e aprimoramento contínuo
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">
                Experiência profissional
              </h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    AngelLira Rastreamento Satelital
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      Engenheiro de Software |
                    </span>
                    <span className="text-gray-700">2021 - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                  Desenvolvimento de sistemas de rastreamento de veículos de
                  carga
                </p>
                <p className="mt-2">
                  Desenvolvimento de sistemas gerenciamento de energia elétrica,
                  gerenciamento fiscal e telemedicina
                </p>
                <p className="mt-2">
                  Desenvolvimento de sistemas gerenciamento fiscal e
                  telemedicina
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    Zapay Pagamentos
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      Engenheiro de software |
                    </span>
                    <span className="text-gray-700">2021 - 2021</span>
                  </p>
                </div>
                <p className="mt-2">Desenvolvimento de sistemas e-commerce</p>
                <p className="mt-2">Desenvolvimento de landing pages</p>
                <p className="mt-2">
                  Desenvolvimento de sistemas de gerenciamento de marketing e
                  análise de dados
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    Synapse Brasil
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      Engenheiro de Software |
                    </span>
                    <span className="text-gray-700">2020 - 2021</span>
                  </p>
                </div>
                <p className="mt-2">
                  Desenvolvimento de sistemas de rastreamento de veículos
                </p>
                <p className="mt-2">
                  Desenvolvimento de sistemas de gerenciamento de frota, web e
                  mobile
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    G44 Brasil S.A.
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      Engenheiro de Software |
                    </span>
                    <span className="text-gray-700">2019 - 2020</span>
                  </p>
                </div>
                <p className="mt-2">Desenvolvimento de sistemas e-commerce</p>
                <p className="mt-2">
                  Desenvolvimento de sistemas de gerenciamento de blockchain
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    Tribunal Superior do Trabalho - TST - DF
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      Engenheiro de Software |
                    </span>
                    <span className="text-gray-700">2017 - 2018</span>
                  </p>
                </div>
                <p className="mt-2">
                  Desenvolvimento de testes funcionais, exploratórios e de
                  usabilidade
                </p>
                <p className="mt-2">
                  Manutenção e desenvolvimento de sistemas
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    Laboratório de informática em saúde - LIS
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">Pesquisador |</span>
                    <span className="text-gray-700">2017 - 2017</span>
                  </p>
                </div>
                <p className="mt-2">
                  Participação em projetos de pesquisa
                </p>
                <p className="mt-2">desenvolvedor de sistemas ML</p>
              </div>
            </div>
              <p className="mt-5 flex justify-end">visite meu linkedin para mais informações<a className="ml-1 text-blue-600" href="https://www.linkedin.com/in/flavio-costap/">flavio-costap</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
