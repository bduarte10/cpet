import { Footer } from '@/components/footer';
import { Courses } from '../components/courses';
import { Hero } from '../components/hero';
import { Faq } from '@/components/faq';

export const Home = () => {
  return (
    <>
      <Hero />
      <Courses />
      <Faq />
      <Footer />
    </>
  );
};
