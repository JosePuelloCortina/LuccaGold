import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Home, Phone, Users, ShoppingBag, Layers, ShoppingCart, LogIn, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationMenu.Root className="fixed top-0 left-0 w-full bg-[#F7F6F2] shadow-md p-4 flex justify-between items-center px-10">
      <div className="text-xl font-serif font-semibold text-[#4B6587]">LuccaGold</div>
      
      {/* Botón hamburguesa para móviles */}
      <button 
        className="md:hidden text-[#4B6587]" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>
      
      <NavigationMenu.List className={`absolute top-full right-0 w-64 bg-[#F7F6F2] shadow-md p-4 rounded-lg flex flex-col space-y-4 md:static md:w-auto md:flex md:flex-row md:space-y-0 md:space-x-8 md:bg-transparent md:shadow-none ${isOpen ? 'flex' : 'hidden'}`}>
        <NavigationMenu.Item>
          <NavigationMenu.Link className="flex items-center space-x-2 text-[#4B6587] hover:text-[#C8C6C6] transition-colors font-sans" href="#home">
            <Home size={20} />
            <span>Home</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="flex items-center space-x-2 text-[#4B6587] hover:text-[#C8C6C6] transition-colors font-sans" href="#contact">
            <Phone size={20} />
            <span>Contacto</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="flex items-center space-x-2 text-[#4B6587] hover:text-[#C8C6C6] transition-colors font-sans" href="#about">
            <Users size={20} />
            <span>Nosotros</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="flex items-center space-x-2 text-[#4B6587] hover:text-[#C8C6C6] transition-colors font-sans" href="#products">
            <ShoppingBag size={20} />
            <span>Productos</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="flex items-center space-x-2 text-[#4B6587] hover:text-[#C8C6C6] transition-colors font-sans" href="#categories">
            <Layers size={20} />
            <span>Categorías</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      
      <div className="hidden md:flex space-x-6 items-center">
        <NavigationMenu.Item className="list-none">
          <NavigationMenu.Link className="flex items-center space-x-2 text-[#4B6587] hover:text-[#C8C6C6] transition-colors font-sans" href="#cart">
            <ShoppingCart size={20} />
            <span>Carrito</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="list-none">
          <NavigationMenu.Link className="flex items-center space-x-2 bg-[#4B6587] text-white px-4 py-2 rounded-lg hover:bg-[#C8C6C6] transition-colors font-sans" href="#login">
            <LogIn size={20} />
            <span>Login</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </div>
    </NavigationMenu.Root>
  );
}