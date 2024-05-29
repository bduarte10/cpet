import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useCourseById } from "@/hooks/useCourseById";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Selo from "@/assets/selo.png";
import DynamicAccordion from "@/components/dinamicAccordion";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { courseData } from "@/constants/courses";
import { formatCurrency } from "@/utils/functions";
import { Star } from "@phosphor-icons/react";
import { Clock, GraduationCap, Laptop, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
interface FormData {
  nome: string;
  email: string;
  celular: string;
}

export const Curso = () => {
  let { id } = useParams();
  const { data, isLoading } = useCourseById(Number(id));

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evite o comportamento padrão de envio do formulário

    // Construa o objeto de dados a serem enviados
    const formData: FormData = {
      nome: nome,
      email: email,
      celular: celular,
    };

    try {
      setSending(true);

      const response = await axios.post("/lead/email/send", formData);
      console.log(response.data);

      setNome("");
      setEmail("");
      setCelular("");
      setSending(false);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    } finally {
      setTimeout(() => {
        window.open(
          `${course?.pagina_venda_embaixador}?studant_name=${formData.nome}&studant_email=${formData.email}&studant_cell_phone=${formData.celular}`,
          "_blank"
        );
      }, 2000);
    }
  };

  const videoUrl = courseData.find((course) => course.id === id)?.videoUrl;
  const dataAccordion = courseData.find((course) => course.id === id)?.curriculum;

  const course = data?.[0];

  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <section ref={topRef} className="mb-10">
        {isLoading && <Loader />}
        <div className="bg-[url('@/assets/fundoazul.png')] bg-cover bg-center">
          <div className="pt-14 pb-14 w-full flex flex-col-reverse gap-10 items-center justify-center mx-auto 
        md:justify-between md:flex-row max-w-7xl md:gap-0">
            <div className="flex items-center justify-center text-center flex-col md:flex-start">
              <h1 className="text-4xl w-4/5 text-balance font-semibold mb-2 text-customerPrimary">{course?.course}</h1>
              <p className="text-lg text-balance font-medium text-white md:text-xl">
                Não deixe nada atrapalhar o seu futuro!
              </p>
              <div className="flex gap-2 mt-3">
                <Button
                  asChild
                  className=" bg-customerPrimary text-neutral-700 hover:bg-yellow-300"
                >
                  <Link to={course?.pagina_venda_embaixador}>
                    Matricule-se
                  </Link>
                </Button >

                <a
                  href="https://wa.me/+5538984058014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="">
                  <Button className="bg-customerPrimary text-neutral-700 hover:bg-yellow-300">
                    Falar com Consultor
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={Selo} alt="Selo" className="w-28" />
              <p className="text-center text-white">
                Instituição nota <br />
                máxima MEC
              </p>
              <div className="flex gap-1 mt-1">
                <Star size={20} color="#FDD105" />
                <Star size={20} color="#FDD105" />
                <Star size={20} color="#FDD105" />
                <Star size={20} color="#FDD105" />
                <Star size={20} color="#FDD105" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl  mx-auto h-full px-10 xl:px-0 grid grid-cols-1 md:grid-cols-3 grid-flow-row">
          <div className="col-span-2 md:pr-5 mt-8">
            {videoUrl && (
              <iframe
                className="rounded aspect-video w-full "
                src={`https://www.youtube.com/embed/${videoUrl}`}
                title={course?.course}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
            <div className="mb-8 mt-4">
              <h2 className="text-3xl text-balance mb-2  font-bold leading-relaxed text-customerSecondary">
                Suporte e Acompanhamento
              </h2>
              <p className="text-lg text-balance font-normal text-slate-600 pr-2">
                Durante todo o curso, você contará com o suporte de nossa equipe de tutores, prontos para auxiliá-lo em
                seu desenvolvimento acadêmico.
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-3xl text-balance mb-2 font-bold  text-customerSecondary">
                Conheça a Grade Curricular do Curso
              </h2>
              <p className="text-lg text-balance font-normal text-slate-600 pr-2">
                Prepare-se para adquirir os conhecimentos teóricos e práticos necessários para se destacar nessa área em
                constante evolução.
              </p>
            </div>
            <div className="w-full">
              <DynamicAccordion data={dataAccordion} />
            </div>
          </div>
          <div>
            <div className="max-w-96 space-y-1 p-4 flex flex-col mt-8 items-center bg-white rounded-sm shadow-xl">
              <div className=" relative p-5 space-y-2 flex flex-col w-full rounded-sm">
                <p className="text-sm text-foreground line-through font-medium">
                  {course?.original_installments}x KTR
                  {formatCurrency(Number(course?.original_price))}
                </p>
                <p className="text-4xl font-bold text-customerSecondary">
                  <span className="text-2xl font-semibold text-customerSecondary">{course?.discount_installments}x </span>
                  {formatCurrency(Number(course?.discount_price))}
                </p>
                <p className="text-foreground text-xs ">NO CARTÃO DE CRÉDITO</p>
                <Button
                  asChild
                  className=" w-fit h-10 text-md bg-customerPrimary text-neutral-700 hover:bg-yellow-300"
                >
                  <Link className="font-bold" to={course?.pagina_venda_embaixador}>
                    REALIZAR MATRÍCULA
                  </Link>
                </Button>
              </div>
              <Separator />
              <div className="w-full p-2 flex space-x-4 items-center justify-start">
                {<GraduationCap size={33} className="text-customerSecondary" />}
                <p className="text-base text-customerSecondary font-medium">RECONHECIDO PELO MEC</p>
              </div>
              <div className="w-full p-2 flex space-x-4 items-center justify-start">
                {<Clock size={30} className="text-customerSecondary" />}
                <p className="text-base text-customerSecondary font-medium">7 MESES</p>
              </div>
              <div className="w-full p-2 flex space-x-4 items-center justify-start">
                {<Trophy size={30} className="text-customerSecondary" />}
                <p className="text-base text-customerSecondary font-medium">VÁLIDO EM TODO BRASIL</p>
              </div>
              <div className="w-full p-2 flex space-x-4 items-center justify-start">
                {<Laptop size={30} className="text-customerSecondary" />}
                <p className="text-base text-customerSecondary font-medium">EAD</p>
              </div>
              <Separator />
              <form onSubmit={handleSubmit} className="space-y-4 pt-5">
                <div className="space-y-2">
                  <h3 className="text-center font-semibold ">TENHO INTERESSE</h3>
                  <p className="text-center text-sm  ">
                    <span className="font-bold ">Preencha o formulário</span> e nossa equipe entrará em contato
                  </p>
                </div>
                <Input
                  type="text"
                  name="name "
                  placeholder="Seu Nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                  name="celular"
                  placeholder="Celular com DDD"
                  value={celular}
                  onChange={(event) => setCelular(event.target.value)}
                />
                <Button type="submit" disabled={sending} className="w-full bg-customerSecondary hover:bg-blue-900 ">
                  ENVIAR
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
