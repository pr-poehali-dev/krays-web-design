
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, Layers, Code, CreditCard, Shield } from "lucide-react";

const services = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Веб-разработка",
    description: "Создание современных, быстрых и адаптивных веб-сайтов и веб-приложений с использованием передовых технологий."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Мобильные приложения",
    description: "Разработка нативных и кросс-платформенных мобильных приложений для iOS и Android с интуитивным интерфейсом."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "UI/UX дизайн",
    description: "Создание привлекательных и удобных интерфейсов, основанных на глубоком понимании потребностей пользователей."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Фронтенд разработка",
    description: "Создание отзывчивых и интерактивных пользовательских интерфейсов с использованием современных JavaScript-фреймворков."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Электронная коммерция",
    description: "Разработка интернет-магазинов и платежных систем с оптимизированными конверсионными воронками."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Техническая поддержка",
    description: "Обеспечение стабильной работы, регулярных обновлений и безопасности вашего цифрового продукта."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Наши услуги
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Предлагаем полный спектр услуг по созданию цифровых продуктов, от разработки 
              концепции до запуска и последующей поддержки.
            </p>
          </div>
          
          <Button variant="outline" className="group">
            Подробнее об услугах
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-card rounded-lg border border-border/40 hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
