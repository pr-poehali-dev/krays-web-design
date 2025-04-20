
import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 border-t border-border/40">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent purple-gradient glow">KRAYS</span>
              <span className="ml-2 text-xs font-medium text-muted-foreground">DESIGN STUDIO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Создаем цифровые продукты, которые объединяют инновационный дизайн и 
              современные технологии для решения бизнес-задач.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="h-4 w-4" />, href: "#" },
                { icon: <Twitter className="h-4 w-4" />, href: "#" },
                { icon: <Linkedin className="h-4 w-4" />, href: "#" },
                { icon: <Instagram className="h-4 w-4" />, href: "#" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={`Социальная сеть ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Услуги</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Веб-разработка",
                "Мобильные приложения", 
                "UI/UX дизайн",
                "Брендинг и айдентика",
                "Консультации и аудит"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Компания</h3>
            <ul className="space-y-3 text-sm">
              {[
                "О нас",
                "Проекты", 
                "Клиенты",
                "Карьера",
                "Блог"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Москва, ул. Технологическая, 42</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <a href="mailto:hello@krays.design" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@krays.design
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="mt-6">
                <Button className="w-full purple-gradient">
                  Связаться с нами
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Krays Design Studio. Все права защищены.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
