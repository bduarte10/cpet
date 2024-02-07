import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';
import { useCourseById } from '@/hooks/useCourseById';
import { Link, useParams } from 'react-router-dom';

export const Curso = () => {
  let { id } = useParams();
  const { data, isLoading } = useCourseById(Number(id));

  const course = data?.[0];
  return (
    <section>
      {isLoading && <Loader />}
      <div className="h-64 w-full flex items-center  px-10 bg-sky-800">
        <div className="max-w-7xl w-full mx-auto flex flex-col">
          <h1 className="text-4xl text-[#FDD105] font-extrabold">{course?.course}</h1>
          <Button asChild variant={'outline'} className="mt-4 w-fit">
            <Link to={course?.pagina_venda_bolsamaisbrasil}>Saiba mais sobre o curso</Link>
          </Button>
        </div>
      </div>
      <div className="max-w-7xl bg-slate-800 w-full mx-auto px-10">
        <p className="text-2xl text-white font-extrabold"></p>
      </div>
      <Footer />
    </section>
  );
};
