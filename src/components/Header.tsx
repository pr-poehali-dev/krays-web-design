
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-border/40 backdrop-blur-sm bg-background/80 fixed top-0 w-full z-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent purple-gradient glow">KRAYS</span>
              <span className="ml-2 text-xs font-medium text-muted-foreground">DESIGN STUDIO</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Проекты
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <Button className="purple-gradient">Связаться</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/40 animate-fade-in py-4">
          <nav className="container px-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Проекты
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <Button className="purple-gradient mt-2 w-full sm:w-auto">Связаться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
