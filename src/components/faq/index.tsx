import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export const Faq = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-10 pt-12 pb-20">
      <h2 className="max-w-2xl mx-auto text-2xl mb-10 font-extrabold text-center text-slate-900">
        Perguntas Frequentes
      </h2>
      <div className="w-full flex justify-center">
        {/* <div>col 1</div> */}
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                QUANTO TEMPO DEMORA PARA EU TER ACESSO AS AULAS?
              </AccordionTrigger>
              <AccordionContent>
                Ao adquirir um de nossos cursos, o aluno terá acesso aos
                conteúdos referentes ao mesmo em até 48 horas após a confirmação
                do pagamento. Caso o aluno tenha efetuado o pagamento em uma de
                nossas unidades, o acesso está condicionado ao repasse dos dados
                do aluno para o CPET.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                QUANTAS VEZES EU POSSO ACESSAR ÀS AULAS?
              </AccordionTrigger>
              <AccordionContent>
                Pensando na qualidade do ensino e na fixação do conteúdo, cada
                aluno possui acesso ilimitado às aulas do curso adquirido,
                podendo assisti-las quantas vezes julgar necessário. Nosso
                Ambiente Virtual de Aprendizagem (AVA) está disponível 24 horas
                por dia, 7 dias por semana.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                POSSO ACESSAR MEU CURSO EM QUALQUER LUGAR?
              </AccordionTrigger>
              <AccordionContent>
                Desde que o aluno esteja munido de seu login e senha, ele poderá
                acessar o curso que esta matriculado de qualquer computador que
                preencha os requisitos mínimos:
                <br /> - Processador: 1.6GHz ou superior. <br /> - Memória RAM:
                1GB ou superior.
                <br /> - Navegadores: IE7 ou superior, Mozilla Firefox, Google
                Chrome, Opera e outros com plugin Java atualizado.
                <br /> - Windows Media Player 9 ou superior.
                <br /> - Internet: 1MB de banda ou superior.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                O CURSO É 100% ONLINE?
              </AccordionTrigger>
              <AccordionContent>
                O nosso curso possui estudo 100% online, assim como exercícios
                de fixação, atividades e avaliações dentro do ambiente virtual.
                Seguindo o modelo de Certificação
                (https://www.cpet.com.br/certificacao), cada componente
                curricular e validado por correspondência ao curso livre e ou
                curso de qualificação profissional , podendo de acordo com a
                legislação vigente ser utilizados os conhecimentos formais e
                informais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                QUANTO TEMPO DEMORA PARA EU CONCLUIR O CURSO?
              </AccordionTrigger>
              <AccordionContent>
                O prazo normal para a conclusão do curso é, em média, de um ano.
                Isso considerando-se que sejam cursadas entre dois a três
                componentes curriculares simultaneamente, com uma dedicação
                diária de 2-3 horas de estudo. Caso o aluno dedique maior tempo
                para estudo, este prazo sofrerá alteração visto que, depende
                quase que exclusivamente do aluno. Alunos que se dedicam em
                tempo integral levam, em média, 4-6 meses para concluir o curso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                O CERTIFICADO É VÁLIDO PELO MEC? POSSO ME REGISTRAR JUNTO AO
                CONSELHO DO MEU CURSO?
              </AccordionTrigger>
              <AccordionContent>
                Sim, todos nossos certificados são reconhecidos pelo MEC e você
                pode verificar nossas portarias de autorização{' '}
                <a
                  className="underline"
                  href="https://sistec.mec.gov.br/consultapublicaunidadeensino/"
                >
                  clicando aqui
                </a>
                .<br /> Após receber o certificado de conclusão técnico nível
                médio, você poderá solicitar, junto ao conselho profissional,
                seu vínculo. Para os alunos de Segurança do Trabalho, os mesmos
                também poderão se registrar junto ao Ministério do Trabalho
                (MT). Todo Certificado pode ser validado junto ao MEC{' '}
                <a
                  className="underline"
                  href="https://sistec.mec.gov.br/validadenacional/"
                >
                  {' '}
                  clicando aqui
                </a>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                POSSO REGISTRAR MEU CERTIFICADO NO CONSELHO DO MEU ESTADO?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Independentemente do seu diploma ser emitido em nossa sede,
                no Rio Grande do Norte, você pode escolher registrar seu
                certificado em qualquer estado da federação visto que o
                certificado tem validade nacional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                JÁ TRABALHO NA ÁREA DO CURSO, POSSO REALIZAR APENAS AS PROVAS?
              </AccordionTrigger>
              <AccordionContent>
                Infelizmente não. Para garantir a qualidade dos nossos cursos,
                todos os alunos, mesmo que com experiência na área, são
                solicitados a realizar alguns componentes curriculares chaves do
                curso.
                <br /> Entretanto, com o aproveitamento de sua experiência, você
                poderá ser dispensado da maioria dos componentes curriculares.
                Para isso, solicitamos que você envie sua carteira de trabalho
                com menção ao cargo de trabalho, uma breve descrição das suas
                atividades e certificados correlatos ao curso desejado para nós,
                ou caso possua mais dúvidas sobre aproveitamento, fale conosco.
                (proficiencia@cpet.com.br)
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">
                EU JÁ SOU FORMADO EM OUTRO CURSO, CONSIGO APROVEITAR COMPONENTES
                CURRICULARES CORRELATOS?
              </AccordionTrigger>
              <AccordionContent>
                Sim, é possível. Para isso, solicitamos que você nos envie seu
                histórico e certificados correlatos ao curso desejado para
                análise. Seus documentos serão avaliados e você receberá um
                feedback contendo os componentes curriculares que poderão ser
                aproveitados. Caso possua mais dúvidas sobre aproveitamento de
                componentes curriculares, entre em contato conosco.
                (proficiencia@cpet.com.br)
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
