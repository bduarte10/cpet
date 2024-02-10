import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';
import { useCourseById } from '@/hooks/useCourseById';
import { Link, useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { GraduationCap } from 'lucide-react';

export const Curso = () => {
  let { id } = useParams();
  const { data, isLoading } = useCourseById(Number(id));

  const course = data?.[0];
  return (
    <>
      <section className="mb-10">
        {isLoading && <Loader />}
        <div className=" pt-24 pb-14 w-full flex items-center mx-auto px-10 bg-sky-800">
          <div className="max-w-7xl w-full mx-auto  flex flex-start flex-col">
            <h1 className="text-4xl w-4/5 text-balance mb-2 text-yellow-300 font-extrabold">
              {course?.course}
            </h1>
            <p className="text-lg italic text-balance font-medium text-white">
              Prepare-se para oportunidades de carreira imperdíveis!
            </p>
            <Button
              asChild
              variant={'outline'}
              className="mt-4 w-fit h-14 text-md text-sky-800 bg-yellow-300 hover:bg-yellow-400"
            >
              <Link
                className="font-bold"
                to={course?.pagina_venda_bolsamaisbrasil}
              >
                Saiba mais sobre o curso
              </Link>
            </Button>
          </div>
        </div>
        <div className="max-w-7xl  mx-auto h-full px-10 xl:px-0 grid grid-cols-3 grid-flow-row">
          <div className="col-span-2 mt-10">
            <div className="mb-8">
              <h2 className="text-3xl text-balance mb-2  font-bold leading-relaxed text-sky-800">
                Flexibilidade no Ensino
              </h2>
              <p className="text-lg text-balance font-normal text-slate-600 pr-2">
                Entendemos a importância de conciliar os estudos com outras
                atividades. Por isso, no CPET, o aluno estuda no seu tempo, o
                Ambiente de Estudos fica disponível 24h por dia, nos 7 dias da
                semana. Assim, você poderá se dedicar ao curso sem abrir mão de
                suas responsabilidades diárias.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl text-balance mb-2  font-bold leading-relaxed text-sky-800">
                Suporte e Acompanhamento
              </h2>
              <p className="text-lg text-balance font-normal text-slate-600 pr-2">
                Durante todo o curso, você contará com o suporte de nossa equipe
                de tutores, prontos para auxiliá-lo em seu desenvolvimento
                acadêmico.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl text-balance mb-2  font-bold leading-relaxed text-sky-800">
                Qualidade Comprovada
              </h2>
              <p className="text-lg text-balance font-normal text-slate-600 pr-2">
                Nossos cursos técnicos têm um histórico sólido de sucesso,
                preparando profissionais altamente qualificados para o mercado
                de trabalho. Somos reconhecidos por nossa excelência educacional
                e por formar profissionais de destaque no setor.
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-3xl text-balance mb-2 font-bold  text-sky-800">
                Conheça a Grade Curricular do Curso
              </h2>
              <p className="text-lg text-balance font-normal text-slate-600 pr-2">
                Prepare-se para adquirir os conhecimentos teóricos e práticos
                necessários para se destacar nessa área em constante evolução.
              </p>
            </div>
            <div className="w-3/4">
              <Accordion
                type="single"
                collapsible
                className="bg-slate-100/70 p-4  rounded-md"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Auxiliar Eletrotécnico – CBO 3131-05
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside">
                      <li>Eletricidade I</li>
                      <li>Eletrônica Básica</li>
                      <li>Instrumentação (EWB)</li>
                      <li>Instrumentação Eletrônica - Multímetro</li>
                      <li>Instrumentação Eletrônica - Osciloscópio</li>
                      <li>Introdução ao Autocad 2D</li>
                      <li>Multisim 13 Fundamentos</li>
                      <li>Nivelamento de Física</li>
                      <li>Nivelamento de Matemática</li>
                      <li>Princípios de Eletromagnetismo</li>
                      <li>Princípios de Eletrônica Analógica</li>
                      <li>Projeto Prático em Eletricidade I</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Auxiliar de Desenho Técnico em Eletroeletrônica – CBO –
                    3180-05
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside">
                      <li>Multisim Avançado - Técnicas de Simulação</li>
                      <li>Leitura e Interpretação de Diagramas Eletrônicos</li>
                      <li>Introdução à Mesa Eletrônica</li>
                      <li>Eletricidade II</li>
                      <li>Eletricidade III</li>
                      <li>Eletrônica Digital</li>
                      <li>Eletrônica Analógica</li>
                      <li>CLP - Controladores Lógicos Programáveis</li>
                      <li>CLP Fundamentos</li>
                      <li>Eletrônica Básica Exemplos Práticos</li>
                      <li>Projeto Prático em Eletrônica I</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Auxiliar de Montador de Equipamentos Eletroeletrônicos – CBO
                    – 7311-10
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside">
                      <li>Eletrônica Digital Fundamentos</li>
                      <li>Eletrônica Industrial</li>
                      <li>Algoritmos e Programação</li>
                      <li>Lógica de Programação</li>
                      <li>Fundamentos de Automação Industrial</li>
                      <li>Máquinas Elétricas</li>
                      <li>Manutenção Elétrica Industrial</li>
                      <li>Eletrônica Industrial - Princípios Básicos</li>
                      <li>Circuitos de Interface e Relógios Digitais</li>
                      <li>Projeto Prático em Eletrônica II</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Auxiliar em Eletrônica – CBO 3132-15
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside">
                      <li>Eletrônica Industrial Avançada</li>
                      <li>Acionamentos Elétricos</li>
                      <li>Amplificadores Operacionais</li>
                      <li>Comunicação Eletrônica</li>
                      <li>Eletrônica Aplicada - Circuitos Transistorizados</li>
                      <li>Sensores Elétricos e Eletrônicos</li>
                      <li>Sistemas Microcontrolados</li>
                      <li>
                        Circuitos Impressos Concepção e Fabricação na Prática
                      </li>
                      <li>Projeto Prático em Eletrônica III</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Trabalho de Conclusão de Curso Eletrônica
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside">
                      <li>Trabalho de Conclusão de Curso Eletrônica</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="col-span-1 space-y-5 -mt-28 shadow-xl p-4 flex flex-col  items-center bg-white rounded-sm ">
            <iframe
              className="rounded"
              width="400"
              height="218"
              src="https://www.youtube.com/embed/IIKxshW2QQA"
              title={course?.course}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="p-5 space-y-2 flex flex-col bg-sky-800 w-full rounded-sm">
              <p className="text-sm text-white font-medium">À PARTIR DE</p>
              <p className="text-4xl font-bold text-yellow-300">
                12x R$ 300,00
              </p>
              <p className="text-white text-xs ">NO CARTÃO DE CRÉDITO</p>
              <Button
                asChild
                variant={'outline'}
                className=" w-fit h-10 text-md text-sky-800 bg-yellow-300 hover:bg-yellow-400"
              >
                <Link
                  className="font-bold"
                  to={course?.pagina_venda_bolsamaisbrasil}
                >
                  REALIZAR MATRÍCULA
                </Link>
              </Button>
            </div>
            {/* <GraduationCap /> */}
          </div>
        </div>
      </section>
    </>
  );
};
