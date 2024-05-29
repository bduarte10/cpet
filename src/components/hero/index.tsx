import imgHero from '@/assets/amarelobolsa.png'
import cpetLogo from '@/assets/cpet.png'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface FormData {
  nome: string
  email: string
  celular: string
}

export const Hero = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Evite o comportamento padrão de envio do formulário

    // Construa o objeto de dados a serem enviados
    const data: FormData = {
      nome: nome,
      email: email,
      celular: celular,
    }

    try {
      setSending(true)
      //await axios.post('/send-email', data)
      await axios.post('/lead/email/send', data)
      setNome('')
      setEmail('')
      setCelular('')
      toast.success(
        'Suas informações foram recebidas com sucesso. Retornaremos o mais breve possível.',
      )
      setSending(false)
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      // Trate o erro, se necessário
    }
  }
  const topRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  return (
    <section
      id="hero"
      ref={topRef}
      className="w-full bg-[url('@/assets/fundoazul.png')] bg-cover  ">
      <div className="h-full max-w-7xl mx-10 gap-8 lg:mx-auto grid grid-cols-1 md:grid-cols-2 py-16 md:gap-32 ">
        <div className="order-2 md:order-1">
          <img
            src={imgHero}
            className="mt-4 md:mt-0  w-[29rem] "
            alt="hero img"
          />
        </div>
        <div className="order-1 md:order-2 p-6 border-t-8 border-customerPrimary bg-white rounded-md">
          <img
            src={cpetLogo}
            alt="cpet logo"
            className="w-40 mx-auto -mt-16 border-4 rounded-md"
          />
          <form onSubmit={handleSubmit} className="space-y-4 pt-5">
            <div className="space-y-2">
              <h3 className="text-neutral-700 text-center text-xl tracking-tight font-semibold ">
                CURSOS TÉCNICOS NA CPET COM BOLSA DE ESTUDO
                <br />À PARTIR DE R$79,99 POR MÊS.
                <br />{' '}
                <span className="text-customerPrimary block mt-2">
                  GARANTA JÁ SUA BOLSA
                </span>
              </h3>
              <p
                className="h-10 text-sm bg-slate-200 text-sky-800 font-semibold
               rounded-md flex items-center justify-center">
                🏆 Maior Escola Técnica Do Brasil
              </p>
              <span className="pt-2 text-neutral-700 font-semibold w-full flex items-center justify-center gap-0 md:gap-4 ">
                <hr className="w-[100px] border-b-1 border-slate-200" />
                <span className='text-center '>
                  Fale com nosso consultor 💬
                </span>
                <hr className="w-[100px] border-b-1 border-slate-200" />
              </span>
            </div>
            <Input
              type="text"
              name="name "
              placeholder="Seu Nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              name="celular"
              placeholder="Celular com DDD"
              value={celular}
              onChange={(event) => setCelular(event.target.value)}
            />
            <Button
              type="submit"
              disabled={sending}
              className="w-full 
               bg-customerPrimary text-neutral-700 hover:bg-yellow-300 disabled:bg-yellow-200">
              Tenho Interesse
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
