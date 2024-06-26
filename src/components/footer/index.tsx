import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="w-full md:h-32 bg-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center pt-8">
        <div className="text-center">
          <p className="p-2">
            Copyright © {new Date().getFullYear()} ConectaEdu - Todos os
            direitos reservados.
          </p>
        </div>
        <div className="flex flex-col-reverse text-center md:flex-row">
          <Link to="/termos">
            <p className="p-2 text-sm underline underline-offset-1 hover:text-customerSecondary">Termos de Uso</p>
          </Link>

          <Link to="/privacidade">
            <p className="p-2 text-sm underline underline-offset-1 hover:text-customerSecondary">Termos de Privacidade</p>
          </Link>
        </div>

      </div>
    </footer>
  )
}
