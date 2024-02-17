export const Footer = () => {
  return (
    <footer className="w-full h-24 bg-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
        <div className="h-full flex items-center gap-4"></div>
        <div>
          <p>
            Copyright © {new Date().getFullYear()} ConectaEdu - Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
