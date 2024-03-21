import logo from '/logo.png'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import logoCPET from '@/assets/cpet.png'
import logoBolsa from '@/assets/bolsa.png'

export const Header = () => {
  return (
    <header className=" w-full h-24 bg-slate-100">
      <div className="max-w-7xl mx-auto space-x-4 flex items-center justify-end h-full">
        <div className="h-full flex flex-row items-center gap-4 mr-auto">
          <Link to="/">
            <img className="h-12" src={logo} alt="logo conectaedu" />
          </Link>
          <img
            className="h-14 hidden md:block"
            src={logoCPET}
            alt="logo CPET"
          />
          <img
            className="h-14 hidden md:block"
            src={logoBolsa}
            alt="logo bolsa mais"
          />
        </div>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavigationMenuLink href="/#sobre">Sobre</NavigationMenuLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavigationMenuLink href="/#cursos">Cursos</NavigationMenuLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a
          href="https://wa.me/+5538984058014"
          target="_blank"
          rel="noopener noreferrer"
          className="">
          <Button variant={'whatsApp'} className="px-10">
            Entre em contato
          </Button>
        </a>
      </div>
    </header>
  )
}
