import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tight text-primary glow">Krays</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Studio</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Создаем цифровые продукты, которые приносят результаты и вдохновляют.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ui-ux-design" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Дизайн
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Веб-разработка
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Мобильная разработка
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Брендинг
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Москва, ул. Тверская, 25
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+74951234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:hello@krays.studio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  hello@krays.studio
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Студия Krays. Все права защищены.
          </p>
          <div className="flex items-center mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
