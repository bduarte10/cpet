import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { courseData } from '@/constants/courses'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

interface CourseProps {
  course: {
    id: string
    name: string
    type: string
    duration: string
    duration_type: string
    discount_percent: string
  }
}

export const Course = ({ course }: CourseProps) => {
  const { id, name, duration, discount_percent } = course

  const imgSrc = courseData.find((course) => course.id === id)?.imgUrl

  const media = courseData.find((course) => course.id === id)?.mediaSalary

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="pb-4 ">
        <img
          className="aspect-auto object-cover rounded mb-4 h-[180px] "
          src={imgSrc}
          alt=""
        />
        <CardTitle className="text-sm text-balance">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm items-center  flex gap-1">
          {' '}
          <Check size={18} color="#00B37E" /> Formação: {duration} Meses
        </p>
        <p className="text-sm items-center  flex gap-1">
          {' '}
          <Check size={18} color="#00B37E" /> Média Salarial: R$ {media}
        </p>
        <p className="text-sm items-center  flex gap-1">
          {' '}
          <Check size={18} color="#00B37E" /> Desconto:{' '}
          {Number(discount_percent) * 1}%
        </p>
        <p></p>
      </CardContent>
      <CardFooter className="">
        <Button className='bg-customerPrimary text-neutral-700 hover:bg-yellow-300 w-full drop-shadow-md'>
          <Link to={`/curso/${id}`}>Saiba mais sobre o curso</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
