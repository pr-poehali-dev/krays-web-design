
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight, Star, Zap, Users, Layers, Code, Monitor, Smartphone } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Устанавливаем заголовок страницы
    document.title = "Студия Krays | Дизайн и разработка цифровых продуктов";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Секция с услугами */}
        <section id="services" className="py-16 md:py-24 bg-secondary/20 relative">
          <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Наши услуги
              </h2>
              <p className="text-muted-foreground">
                Мы предлагаем полный спектр услуг по созданию цифровых продуктов, 
                от разработки концепции до запуска и последующей поддержки.
              </p>
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
                  icon: <Zap className="h-6 w-6" />,
                  title: "Оптимизация производительности",
                  description: "Анализ и улучшение скорости загрузки и общей производительности существующих веб-проектов."
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Консультации и аудит",
                  description: "Экспертные консультации по улучшению пользовательского опыта, дизайна и технической архитектуры."
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-lg border border-border/40 hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
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
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
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
                    "Индивидуальный подход к каждому проекту",
                    "Команда опытных специалистов",
                    "Полный цикл разработки - от идеи до запуска",
                    "Современные технологии и методологии",
                    "Поддержка и развитие проектов после запуска"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="mt-8 purple-gradient">
                  Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-square md:aspect-auto md:h-[500px] bg-muted rounded-lg overflow-hidden">
                  <img src="/placeholder.svg" alt="Krays Studio workspace" className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-6 max-w-xs ml-6">
                      <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border/40">
                        <h3 className="text-xl font-medium mb-2">Более 50 успешных проектов</h3>
                        <p className="text-sm text-muted-foreground">
                          Наше портфолио включает проекты для стартапов и корпораций по всему миру
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция отзывов */}
        <section id="testimonials" className="py-16 md:py-24 bg-secondary/20 relative">
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
                  quote: "Команда Krays превзошла все наши ожидания. Результатом стал продукт, который полностью соответствует нашим бизнес-целям.",
                  author: "Анна Ковалева",
                  role: "CEO, TechStart"
                },
                {
                  quote: "Благодаря их профессионализму и креативному подходу, мы смогли воплотить наши идеи в жизнь и получить отличные отзывы от пользователей.",
                  author: "Дмитрий Сергеев",
                  role: "Founder, Nextlevel"
                },
                {
                  quote: "Эффективная коммуникация, четкое соблюдение сроков и высокое качество работы — то, что отличает Krays Studio от других компаний.",
                  author: "Елена Михайлова",
                  role: "Marketing Director, GrowthHub"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-lg border border-border/40 flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-primary fill-primary" />
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
