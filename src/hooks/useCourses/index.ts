import { getCourses } from '@/service/apiCourses';
import { useQuery } from 'react-query';

export const useCourses = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
    staleTime: 600000,
    refetchOnWindowFocus: false
  });

  return { data, isLoading, error };
};
