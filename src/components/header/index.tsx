import logo from '/logo.png';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
export const Header = () => {
  return (
    <header className=" w-full h-24 bg-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="h-full flex items-center gap-4">
          <img className="h-12" src={logo} alt="logo conectaedu" />
          {/* <img className="h-20" src={logoCPET} alt="logo CPET" />
          <img className="h-20" src={logoBolsa} alt="logo bolsa mais" /> */}
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
                <NavigationMenuLink href="/#cursos">Cursos</NavigationMenuLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Sobre</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Contato</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant={'whatsApp'} className="px-10">
          Entre em contato
        </Button>
      </div>
    </header>
  );
};
