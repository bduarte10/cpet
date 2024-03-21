import whatsAppBtn from '@/assets/whatsapp.svg'
export function Whatsapp() {
  return (
    <a
      href="https://wa.me/+5538984058014"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 ">
      <div className="relative z-0 w-14 h-14 bg-green-300 rounded-full animate-ping "></div>
      <img src={whatsAppBtn} alt="whatsapp" className="absolute top-0 " />
    </a>
  )
}
