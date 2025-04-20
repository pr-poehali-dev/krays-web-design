
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, ArrowRight, Star, Zap, Users, 
  Layers, Code, Monitor, Smartphone, CreditCard,
  Clock, Shield, Lightbulb, Rocket
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  useEffect(() => {
    document.title = "Студия Krays | Дизайн и разработка цифровых продуктов";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Секция с процессом работы */}
        <section className="py-16 md:py-24 bg-secondary/10 relative overflow-hidden">
          <div className="absolute -top-40 right-0 w-1/2 h-80 bg-primary/5 rounded-full filter blur-[100px]"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Наш процесс работы
              </h2>
              <p className="text-muted-foreground">
                Мы следуем эффективному процессу разработки, который позволяет нам создавать 
                качественные продукты в соответствии с вашими ожиданиями.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Исследование",
                  description: "Анализируем целевую аудиторию, конкурентов и текущие тренды для формирования эффективной стратегии."
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "Проектирование",
                  description: "Создаем прототипы и макеты интерфейса, фокусируясь на пользовательском опыте и бизнес-целях."
                },
                {
                  icon: <Layers className="h-6 w-6" />,
                  title: "Разработка",
                  description: "Воплощаем дизайн в код, используя современные технологии и следуя лучшим практикам."
                },
                {
                  icon: <Rocket className="h-6 w-6" />,
                  title: "Запуск и поддержка",
                  description: "Запускаем проект, тестируем его работу и обеспечиваем последующую техническую поддержку."
                }
              ].map((step, index) => (
                <Card key={index} className="bg-card/50 border-border/40 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      {step.icon}
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-medium">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Секция с услугами */}
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
              {[
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
              ].map((service, index) => (
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
        
        {/* Секция с проектами */}
        <Projects />
        
        {/* Секция с преимуществами */}
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
                  {[
                    { title: "Индивидуальный подход", description: "Каждый проект уникален, и мы разрабатываем решения, соответствующие конкретным потребностям и целям клиента." },
                    { title: "Команда экспертов", description: "Наша команда состоит из опытных дизайнеров, разработчиков и менеджеров с многолетним опытом работы." },
                    { title: "Прозрачность процессов", description: "Мы обеспечиваем полную прозрачность на всех этапах работы и регулярную коммуникацию." },
                    { title: "Долгосрочное сотрудничество", description: "Мы не просто создаем продукты, а выстраиваем долгосрочные партнерские отношения с клиентами." },
                  ].map((item, index) => (
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
                      {[
                        { number: "50+", label: "Проектов" },
                        { number: "30+", label: "Клиентов" },
                        { number: "15", label: "Экспертов" },
                      ].map((stat, index) => (
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
        
        {/* Секция отзывов */}
        <section id="testimonials" className="py-16 md:py-24 relative">
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full filter blur-3xl"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Что говорят клиенты
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Отзывы от наших клиентов, с которыми мы имели удовольствие работать над различными проектами.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote: "Команда Krays превзошла все наши ожидания. Результатом стал продукт, который полностью соответствует нашим бизнес-целям и получил отличные отзывы от пользователей.",
                  author: "Анна Ковалева",
                  role: "CEO, TechStart",
                  rating: 5
                },
                {
                  quote: "Благодаря их профессионализму и креативному подходу, мы смогли воплотить наши идеи в жизнь. Особенно впечатлило внимание к деталям и готовность учитывать все наши пожелания.",
                  author: "Дмитрий Сергеев",
                  role: "Founder, Nextlevel",
                  rating: 5
                },
                {
                  quote: "Эффективная коммуникация, четкое соблюдение сроков и высокое качество работы — то, что отличает Krays Studio от других компаний на рынке цифровых услуг.",
                  author: "Елена Михайлова",
                  role: "Marketing Director, GrowthHub",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-lg border border-border/40 hover:border-primary/40 transition-colors flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        className={`h-4 w-4 ${
                          starIndex < testimonial.rating 
                            ? "text-primary fill-primary" 
                            : "text-muted-foreground"
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>
                  
                  <Separator className="mb-4" />
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">{testimonial.author.split(' ').map(name => name[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <Button variant="outline">
                Смотреть все отзывы <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Секция контактов */}
        <section className="py-16 md:py-24 bg-card/50 border-t border-border/40">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Готовы обсудить ваш проект?
              </h2>
              <p className="text-muted-foreground mb-8">
                Свяжитесь с нами, чтобы обсудить ваши идеи и узнать, как мы можем помочь в их реализации.
                Мы открыты для сотрудничества и всегда рады новым вызовам.
              </p>
              <Button size="lg" className="purple-gradient">
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
