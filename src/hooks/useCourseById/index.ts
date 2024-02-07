import { getCourseById } from '@/service/apiCourses';
import { useQuery } from 'react-query';
interface ApiResponse {
  id: string;
  course: string;
  duration: string;
  duration_type: string;
  original_price: string;
  original_installments: string;
  discount_price: string;
  discount_installments: string;
  more_advantages: string;
  more_advantage_text: string;
  limited_spaces: string;
  amount_of_scholarships_available: string;
  enrolment_fee: string;
  own_financing: string;
  comission_amount: string;
  description: string;
  status: string;
  school: string;
  specific_information: string | null;
  is_all_search: string;
  is_regressive_discount: string;
  discount_percent: string;
  keyword: string | null;
  academic_period: string | null;
  is_black_friday: string;
  is_enrolment_fee: string;
  is_enrolment_fee_text: string;
  sschool: string;
  sunit: string;
  scity: string;
  sstate: string;
  slevel: string;
  scourse: string;
  smodality: string;
  sshift: string;
  stype: string;
  sarea: string;
  custom_button_enable: string;
  custom_button_title: string;
  custom_button_description: string;
  show_academic_period: string;
  is_all_state: string;
  imported_date: string;
  level: string;
  type: string;
  modality: string;
  shift: string;
  city: string;
  state: string;
  base_64_id: string;
  base_64_uid: string;
  pagina_venda_embaixador: string;
  pagina_venda_bolsamaisbrasil: string;
}
interface ApiResponseArray extends Array<ApiResponse> {}

export const useCourseById = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['course', id],
    queryFn: () => getCourseById(id),
    staleTime: 600000,
    refetchOnWindowFocus: false
  });
  return { data: data as ApiResponseArray, isLoading, error };
};
