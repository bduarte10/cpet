import { useCourses } from '@/hooks/useCourses';
import { Course } from '../course';
import { Loader } from '../ui/loader';

interface ICourse {
  id: string;
  name: string;
  type: string;
  duration: string;
  duration_type: string;
  discount_percent: string;
}
export const Courses = () => {
  const { data: courses, isLoading } = useCourses();

  return (
    <section id="cursos" className="w-full bg-slate-100">
      <div className="max-w-7xl py-14 px-10 lg:px-0 lg:mx-auto">
        <h2 className="max-w-2xl mx-auto text-2xl mb-14 font-extrabold text-center text-slate-900">
          Confira os Cursos Disponíveis no EAD da Cpet com DESCONTOS DE ATÉ 80%
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {isLoading && <Loader />}
          {courses?.map((course: ICourse) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
