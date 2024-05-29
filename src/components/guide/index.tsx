import { ChalkboardTeacher, Check, GraduationCap, HandTap } from "@phosphor-icons/react";
import { Button } from '../ui/button';

export function Guide() {
  return (
    <section className="w-full py-10 bg-customerSecondary">
      <div className="max-w-7xl mx-auto px-14 md:px-0">
        <div className="mb-4">
          <h2 className="text-4xl font-semibold text-white text-center md:text-start">
            CORRA E GARANTA AGORA! <br />
            <span className="text-customerPrimary">BOLSAS LIMITADAS</span>
          </h2>
          <div className="">
            <p className="text-white mt-2 flex gap-1 justify-start md:items-center md:justify-start">
              <Check size={18} color="white" />
              Não precisa de Comprovação de renda e nem Prova do Enem.
            </p>
            <p className="text-white mt-2 flex gap-1 justify-start md:items-center md:justify-start">
              <Check size={18} color="white" />
              Compre agora seu curso ou tire sua dúvida com um dos nossos Especialistas Educacional.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mb-12 md:justify-start">
          <a href="/#cursos">
            <Button variant={'whatsApp'} className="md:w-[16.25rem] bg-customerPrimary text-neutral-700 hover:bg-yellow-300">
              Quero minha Bolsa
            </Button>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 max-w-[90.25rem] mx-auto">

          <div className="flex items-center border p-3 rounded-md shadow-md md:gap-4">
            <div className="flex items-center justify-center bg-white -mt-10 rounded-full w-16 h-16 md:w-20 md:h-20 drop-shadow-xl">
              <HandTap size={52} color="#013C95" />
            </div>
            <span className="text-md pl-6 md:text-xl md:pl-2 text-white">
              Escolha o seu curso
            </span>
          </div>

          <div className="flex items-center border p-3 rounded-md shadow-md md:gap-4">
            <div className="flex items-center justify-center bg-white -mt-10 rounded-full min-w-16 h-16 md:w-20 md:h-20 drop-shadow-xl">
              <ChalkboardTeacher size={52} color="#013C95" />
            </div>
            <span className="text-md md:text-xl pl-6 md:pl-2 text-white">
              Faça sua pré matricula online
            </span>
          </div>

          <div className="flex items-center border p-3 rounded-md shadow-md md:gap-4">
            <div className="flex items-center justify-center bg-white -mt-10 rounded-full min-w-16 h-16 md:min-w-20 md:h-20 drop-shadow-xl">
              <GraduationCap size={52} color="#013C95" />
            </div>
            <span className="text-md md:text-xl pl-6 md:pl-2 text-white">
              Comece a estudar pagando menos
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
