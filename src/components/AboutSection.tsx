import { IdentificationIcon } from "@heroicons/react/16/solid";
import { useLanguage } from '@/context/LanguageContext';

function AboutSection() {
  const { language } = useLanguage();

  const about = {
    br: {
      title: "Sobre mim",
      paragraph1: (
        <>
          Sou engenheiro de software formado em Engenharia de Software pela Universidade de Brasília (UnB) e atuo na área de desenvolvimento web desde 2018. Especializado em <b className="text-blue-500">front-end</b>, possuo expertise em tecnologias modernas como <b className="text-blue-500">React</b>, além de conhecimento em Node, Docker, integração contínua, bancos de dados e testes automatizados. Minha experiência inclui a criação de interfaces responsivas, intuitivas e escaláveis, sempre focadas em oferecer a melhor experiência para o usuário e atender às necessidades dos projetos de maneira eficiente e inovadora.
        </>
      ),
      paragraph2: (
        <>
          Ao longo da minha carreira, participei de projetos de destaque para clientes renomados, contribuindo com soluções de alto impacto. Além disso, desenvolvi sistemas para diversas áreas, como rastreamento veicular, gerenciamento fiscal e marketing digital. Também busco constantemente me aperfeiçoar, o que me levou a conquistar algumas certificações consolidando minha capacidade de entrega e alinhamento com as <b className="text-blue-500">melhores práticas</b> do mercado.
        </>
      )
    },
    en: {
      title: "About me",
      paragraph1: (
        <>
          I am a software engineer graduated in Software Engineering from the University of Brasília (UnB) and have been working in web development since 2018. Specialized in <b className="text-blue-500">front-end</b>, I have expertise in modern technologies such as <b className="text-blue-500">React</b>, along with knowledge in Node, Docker, continuous integration, databases, and automated testing. My experience includes creating responsive, intuitive, and scalable interfaces, always focused on providing the best user experience and efficiently meeting project needs in an innovative way.
        </>
      ),
      paragraph2: (
        <>
          Throughout my career, I have participated in high-profile projects for renowned clients contributing with high-impact solutions. I have also developed systems for various areas, such as vehicle tracking, fiscal management, and digital marketing. I am also constantly striving to improve myself, which has led me to achieve several certifications, consolidating my ability to deliver and align with the <b className="text-blue-500">best practices</b> in the market.
        </>
      )
    }
  };

  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-8">
        <IdentificationIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">{about[language].title}</h2>
      </div>
      <p className="text-gray-700 mb-6">{about[language].paragraph1}</p>
      <p className="text-gray-700">{about[language].paragraph2}</p>
    </>
  );
}

export default AboutSection;
