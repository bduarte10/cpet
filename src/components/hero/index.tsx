import imgHero from '@/assets/imgHero.png'
import { Button } from '../ui/button'
export const Hero = () => {
  return (
    <section className="w-full  bg-[url('@/assets/bg.jpg')] h-5/6 ">
      <div className="h-full max-w-7xl mx-10 lg:mx-auto grid grid-cols-1 md:grid-cols-3 py-14 ">
        <div className="md:col-span-2 text-6xl font-extrabold text-white ">
          <span className="text-[#FDD105] text-2xl">Educação</span>
          <h1 className="leading-normal mb-4 text-2xl md:text-6xl">
            Cursos Técnicos EAD
            <br /> mais baratos do{' '}
            <span className="text-[#FDD105]">Brasil</span>
          </h1>

          <Button variant={'secondary'} className="">
            Conheça os Cursos
          </Button>
        </div>
        <div>
          <img src={imgHero} className="mt-4 md:mt-0 w-full" alt="hero img" />
        </div>
      </div>
    </section>
  )
}
