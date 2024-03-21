import { useRef, useEffect } from 'react'
import { Courses } from '../components/courses'
import { Hero } from '../components/hero'
import { Faq } from '@/components/faq'
import { Guide } from '@/components/guide'
export const Home = () => {
  const topRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  return (
    <>
      <Hero />
      <Courses />
      <Guide />
      <Faq />
    </>
  )
}
