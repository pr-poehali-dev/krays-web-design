import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";

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
        
        {/* Секция с преимуществами */}
        <section className="py-16 md:py-24">
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
              
              <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-muted rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Krays Studio workspace" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 bg-card/90 backdrop-blur-sm rounded-lg max-w-xs text-center">
                    <h3 className="text-xl font-medium mb-2">Более 50 успешных проектов</h3>
                    <p className="text-sm text-muted-foreground">
                      Наше портфолио включает проекты для стартапов и корпораций по всему миру
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция с проектами */}
        <Projects />
        
        {/* Секция отзывов */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Что говорят клиенты
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Отзывы от наших клиентов, с которыми мы имели удовольствие работать над различными проектами.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-6 bg-card rounded-lg border flex flex-col">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  
                  <p className="text-sm mb-6 flex-1">
                    "Команда Krays превзошла все наши ожидания. Они не только реализовали наше видение, 
                    но и предложили инновационные решения, о которых мы даже не задумывались. 
                    Результатом стал продукт, который полностью соответствует нашим бизнес-целям."
                  </p>
                  
                  <Separator className="mb-4" />
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">АК</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Анна Ковалева</h4>
                      <p className="text-xs text-muted-foreground">CEO, TechStart</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Секция контактов */}
        <section className="py-16 md:py-24 bg-card">
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
