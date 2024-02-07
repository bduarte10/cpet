import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import logo from '/logo.png';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
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
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <img className="h-24  rounded mb-4 " src={logo} alt="" />
        <CardTitle className="text-base">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>formação: {duration} Meses</p>
        <p>desconto: {Number(discount_percent) * 1}%</p>
      </CardContent>
      <CardFooter className="">
        <Button asChild variant={'outline'}>
          <Link to={`/curso/${id}`}>Saiba mais sobre o curso</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
