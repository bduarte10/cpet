import { Button } from '../ui/button'

export function Guide() {
  return (
    <section className="w-full  py-10">
      <h2 className="max-w-2xl mx-auto text-2xl mb-14 font-extrabold text-center text-slate-900">
        Corra e garanta agora essa Oportunidade ÚNICA! Bolsas Limitadas.
      </h2>
      <div className="px-20 grid md:grid-cols-3 gap-4 max-w-[1300px] mx-auto">
        <div className="flex flex-col space-y-5 border p-5 rounded-md shadow-md">
          <span className="text-7xl text-green-700">01</span>
          <span className="text-xl md:text-2xl text-slate-900">
            Escolha o curso
          </span>
        </div>
        <div className="flex flex-col space-y-5 border p-5 rounded-md shadow-md">
          <span className="text-7xl text-green-700">02</span>
          <span className="text-xl md:text-2xl text-slate-900">
            Faça sua pré matricula online
          </span>
        </div>
        <div className="flex flex-col space-y-5 border p-5 rounded-md shadow-md">
          <span className="text-7xl text-green-700">03</span>
          <span className="text-xl md:text-2xl text-slate-900">
            Comece a estudar pagando menos
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-5">
        <a href="/#cursos" className="">
          <Button variant={'whatsApp'} className="px-10 md:w-[500px] ">
            Quero minha Bolsa
          </Button>
        </a>
      </div>
    </section>
  )
}
