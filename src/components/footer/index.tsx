import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="w-full h-24 bg-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
        <div className="h-full flex items-center gap-4"></div>
        <div>
          <p className="p-2">
            Copyright © {new Date().getFullYear()} ConectaEdu - Todos os
            direitos reservados.
          </p>

          <Link to="/termos">
            <p className="p-2">Termos de Uso</p>
          </Link>

          <Link to="/privacidade">
            <p className="p-2">Termos de Privacidade</p>
          </Link>

        </div>
      </div>
    </footer>
  )
}
