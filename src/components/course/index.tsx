import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { courseImg } from '@/constants/courses';
interface CourseProps {
  course: {
    id: string;
    name: string;
    type: string;
    duration: string;
    duration_type: string;
    discount_percent: string;
  };
}

export const Course = ({ course }: CourseProps) => {
  const { id, name, duration, discount_percent } = course;

  const imgSrc = courseImg.find((course) => course.id === id)?.imgUrl;

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="pb-4">
        <img
          className="aspect-auto object-cover rounded mb-4 "
          src={imgSrc}
          alt=""
        />
        <CardTitle className="text-sm text-balance">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm items-center  flex gap-1">
          {' '}
          <Check size={18} color="#00B37E" /> formação: {duration} Meses
        </p>
        <p className="text-sm items-center  flex gap-1">
          {' '}
          <Check size={18} color="#00B37E" /> desconto:{' '}
          {Number(discount_percent) * 1}%
        </p>
        <p></p>
      </CardContent>
      <CardFooter className="">
        <Button asChild variant={'outline'}>
          <Link to={`/curso/${id}`}>Saiba mais sobre o curso</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
