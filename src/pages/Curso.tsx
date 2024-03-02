import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loader'
import { useCourseById } from '@/hooks/useCourseById'
import { Link, useParams } from 'react-router-dom'

import { formatCurrency } from '@/utils/functions'
import { Clock, GraduationCap, Laptop, Trophy } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { courseData } from '@/constants/courses'
import { Input } from '@/components/ui/input'
import DynamicAccordion from '@/components/dinamicAccordion'

export const Curso = () => {
  let { id } = useParams()
  const { data, isLoading } = useCourseById(Number(id))

  const videoUrl = courseData.find((course) => course.id === id)?.videoUrl
  const dataAccordion = courseData.find(
    (course) => course.id === id,
  )?.curriculum

  const course = data?.[0]
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
              className="mt-4 w-fit h-14 text-md text-sky-800 bg-yellow-300 hover:bg-yellow-400">
              <Link
                className="font-bold"
                to={course?.pagina_venda_bolsamaisbrasil}>
                Saiba mais sobre o curso
              </Link>
            </Button>
          </div>
        </div>
        <div className="max-w-7xl  mx-auto h-full px-10 xl:px-0 grid grid-cols-1 md:grid-cols-3 grid-flow-row">
          <div className="col-span-2 pr-5 mt-8">
            {videoUrl && (
              <iframe
                className="rounded aspect-video w-full "
                src={`https://www.youtube.com/embed/${videoUrl}`}
                title={course?.course}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            )}
            <div className="mb-8 mt-4">
              <h2 className="text-3xl text-balance mb-2  font-bold leading-relaxed text-sky-800">
                Suporte e Acompanhamento
              </h2>
              <p className="text-lg text-balance font-normal text-slate-600 pr-2">
                Durante todo o curso, você contará com o suporte de nossa equipe
                de tutores, prontos para auxiliá-lo em seu desenvolvimento
                acadêmico.
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
            <div className="w-full">
              <DynamicAccordion data={dataAccordion} />
            </div>
          </div>
          <div className="max-w-96 space-y-1 shadow-xl p-4 flex flex-col  items-center bg-white rounded-sm ">
            <div className="p-5 space-y-2 flex flex-col w-full rounded-sm">
              <p className="text-sm text-foreground line-through font-medium">
                {course?.original_installments}x KTR
                {formatCurrency(Number(course?.original_price))}
              </p>
              <p className="text-4xl font-bold text-sky-800">
                <span className="text-2xl font-semibold text-sky-800">
                  {course?.discount_installments}x{' '}
                </span>
                {formatCurrency(Number(course?.discount_price))}
              </p>
              <p className="text-foreground text-xs ">NO CARTÃO DE CRÉDITO</p>
              <Button
                asChild
                variant={'outline'}
                className=" w-fit h-10 text-md text-sky-800 bg-yellow-300 hover:bg-yellow-400">
                <Link
                  className="font-bold"
                  to={course?.pagina_venda_bolsamaisbrasil}>
                  REALIZAR MATRÍCULA
                </Link>
              </Button>
            </div>
            <Separator />
            <div className="w-full p-2 flex space-x-4 items-center justify-start">
              {<GraduationCap size={33} className="text-sky-800" />}
              <p className="text-base text-sky-800 font-medium">
                RECONHECIDO PELO MEC
              </p>
            </div>
            <div className="w-full p-2 flex space-x-4 items-center justify-start">
              {<Clock size={30} className="text-sky-800" />}
              <p className="text-base text-sky-800 font-medium">7 MESES</p>
            </div>
            <div className="w-full p-2 flex space-x-4 items-center justify-start">
              {<Trophy size={30} className="text-sky-800" />}
              <p className="text-base text-sky-800 font-medium">
                VÁLIDO EM TODO BRASIL
              </p>
            </div>
            <div className="w-full p-2 flex space-x-4 items-center justify-start">
              {<Laptop size={30} className="text-sky-800" />}
              <p className="text-base text-sky-800 font-medium">EAD</p>
            </div>
            <Separator />
            <form
              action="https://formsubmit.co/duartebruno2208@gmail.com"
              method="POST"
              className="space-y-4 pt-5">
              <h3 className="text-center font-semibold">
                RECEBA MAIS INFORMAÇÕES DE UM CONSULTOR
              </h3>
              <Input type="text" name="name" placeholder="Seu Nome" />
              <Input type="email" name="email" placeholder="E-mail" />
              <Input name="celular" placeholder="Celular com DDD" />
              <Button className="w-full bg-sky-800 hover:bg-sky-900">
                ENVIAR
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
