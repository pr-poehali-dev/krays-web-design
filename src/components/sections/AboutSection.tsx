
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

const advantages = [
  { title: "Индивидуальный подход", description: "Каждый проект уникален, и мы разрабатываем решения, соответствующие конкретным потребностям и целям клиента." },
  { title: "Команда экспертов", description: "Наша команда состоит из опытных дизайнеров, разработчиков и менеджеров с многолетним опытом работы." },
  { title: "Прозрачность процессов", description: "Мы обеспечиваем полную прозрачность на всех этапах работы и регулярную коммуникацию." },
  { title: "Долгосрочное сотрудничество", description: "Мы не просто создаем продукты, а выстраиваем долгосрочные партнерские отношения с клиентами." },
];

const statistics = [
  { number: "50+", label: "Проектов" },
  { number: "30+", label: "Клиентов" },
  { number: "15", label: "Экспертов" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/10 relative overflow-hidden">
      <div className="absolute -bottom-40 left-0 w-1/2 h-80 bg-primary/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Почему выбирают Krays Studio
            </h2>
            <p className="text-muted-foreground mb-8">
              Мы объединяем технологические знания и креативное мышление, чтобы создавать 
              продукты, которые не только выглядят великолепно, но и решают реальные задачи бизнеса.
            </p>
            
            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <Button className="mt-8 purple-gradient">
              Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-[480px] bg-card rounded-lg overflow-hidden border border-border/40">
              <img src="/placeholder.svg" alt="Krays Studio workspace" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                    <Clock className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">5+ лет опыта</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Создаем уникальные цифровые решения с 2018 года
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-8 w-full max-w-md">
                  {statistics.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-400 animate-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-primary animate-glow animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
