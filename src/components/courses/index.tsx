import { useCourses } from "@/hooks/useCourses";
import { Course } from "../course/index";
import { SkeletonCard } from "../skeletonCard";

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

  const excludedIds = new Set(["7287", "7288", "7286", "4804"]);
  const memo = new Map();

  const filtered = courses?.filter((course: any) => {
    if (memo.has(course.id)) {
      return !memo.get(course.id);
    }

    const excluded = excludedIds.has(course.id);
    memo.set(course.id, excluded);
    return !excluded;
  });

  return (
    <section id="cursos" className="w-full bg-slate-100">
      <div className="max-w-7xl py-14 px-10 lg:px-0 lg:mx-auto">
        <h2 className="max-w-2xl mx-auto text-2xl mb-14 font-semibold text-center text-neutral-700">
          CONFIRA OS CURSOS DISPONÍVEIS NO EAD DA  <span className="text-2xl piscar-borda text-customerSecondary">CPET</span> <br />A MAIOR
          ESCOLA TÉCNICA DO BRASIL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {isLoading && [1, 2, 3, 4].map((_, i) => <SkeletonCard key={i} />)}
          {filtered?.map((course: ICourse) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
