
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-card/50 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent purple-gradient">KRAYS</span>
              <span className="ml-2 text-xs font-medium text-muted-foreground">DESIGN STUDIO</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Создаем впечатляющие цифровые продукты с 2015 года. 
              Наша миссия — помогать брендам выделяться в цифровом пространстве.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Услуги</h3>
            <ul className="space-y-3">
              {[
                "Веб-разработка",
                "UI/UX дизайн",
                "Мобильные приложения",
                "Брендинг",
                "Маркетинг"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Компания</h3>
            <ul className="space-y-3">
              {[
                "О нас",
                "Портфолио",
                "Команда",
                "Карьера",
                "Блог"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Москва, ул. Тверская, 1, офис 203
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  +7 (999) 123-45-67
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  hello@krays-studio.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2023 Krays Design Studio. Все права защищены.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
