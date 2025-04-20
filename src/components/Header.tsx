import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold tracking-tight text-primary glow">Krays</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className="px-4 py-2 text-sm hover:text-primary transition-colors"
                >
                  <Link to="/">Главная</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className="px-4 py-2 text-sm hover:text-primary transition-colors"
                >
                  <Link to="/services">Услуги</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className="px-4 py-2 text-sm hover:text-primary transition-colors"
                >
                  <Link to="/projects">Проекты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button className="purple-gradient">
            Связаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <nav className="container px-4 py-4 flex flex-col gap-2">
            <Link 
              to="/" 
              className="px-4 py-3 hover:bg-secondary rounded-md text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-3 hover:bg-secondary rounded-md text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/projects" 
              className="px-4 py-3 hover:bg-secondary rounded-md text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Проекты
            </Link>
            <Button className="purple-gradient mt-2">
              Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
