import { IdentificationIcon } from "@heroicons/react/16/solid";

function AboutSection() {
  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-8">
        <IdentificationIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">Sobre mim</h2>
      </div>
      <p className="text-gray-700 mb-6">
        Sou engenheiro de software formado em Engenharia de Software pela
        Universidade de Brasília (UnB) e atuo na área de desenvolvimento web
        desde 2018. Especializado em <b className="text-blue-500">front-end</b>,
        possuo expertise em tecnologias modernas como{" "}
        <b className="text-blue-500">React</b> e{" "}
        <b className="text-blue-500">Vue</b>, além de conhecimento em Node,
        Docker, integração contínua, bancos de dados e testes automatizados.
        Minha experiência inclui a criação de interfaces responsivas, intuitivas
        e escaláveis, sempre focadas em oferecer a melhor experiência para o
        usuário e atender às necessidades dos projetos de maneira eficiente e
        inovadora.
      </p>
      <p className="text-gray-700">
        Ao longo da minha carreira, participei de projetos de destaque para
        clientes renomados, como <b className="text-blue-500">Samsung</b> e{" "}
        <b className="text-blue-500">Carrefour</b>, contribuindo com soluções de
        alto impacto. Além disso, desenvolvi sistemas para diversas áreas, como
        rastreamento veicular, gerenciamento fiscal e marketing digital. Também
        busco constantemente me aperfeiçoar, o que me levou a conquistar algumas
        certificações consolidando minha capacidade de entrega e alinhamento com
        as <b className="text-blue-500">melhores práticas</b> do mercado.
      </p>
    </>
  );
}

export default AboutSection;
