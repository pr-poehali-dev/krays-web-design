
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-1/4 right-0 w-2/3 h-1/2 bg-primary/10 rounded-full filter blur-[120px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-accent/5 rounded-full filter blur-[100px] z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 leading-tight">
                Создаем <span className="text-transparent bg-clip-text purple-gradient glow">цифровые</span> продукты, которые впечатляют
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Мы объединяем креативный дизайн и передовые технологии, чтобы создавать уникальные веб и мобильные решения для вашего бизнеса.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="purple-gradient">
                Обсудить проект <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Смотреть проекты
              </Button>
            </div>
            
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                { icon: <Monitor className="h-5 w-5" />, text: "Веб-разработка" },
                { icon: <Smartphone className="h-5 w-5" />, text: "Мобильные приложения" },
                { icon: <Zap className="h-5 w-5" />, text: "Современный UI/UX" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <div className="bg-primary/10 p-1.5 rounded-full text-primary">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="aspect-square lg:aspect-auto lg:h-[600px] bg-card/50 rounded-lg p-6 border border-border/50 backdrop-blur-sm">
              <div className="relative h-full w-full overflow-hidden rounded-md">
                {/* Имитация дизайн-интерфейса */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-krays-dark flex items-center px-4 border-b border-border/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="pt-16 px-4 grid grid-cols-3 gap-4 h-full">
                  <div className="col-span-1 space-y-4">
                    <div className="h-24 bg-primary/10 rounded-md animate-pulse"></div>
                    <div className="h-32 bg-primary/5 rounded-md"></div>
                    <div className="h-24 bg-primary/10 rounded-md animate-pulse animation-delay-2000"></div>
                  </div>
                  
                  <div className="col-span-2 space-y-4">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 rounded-md"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-primary/5 rounded-md animate-pulse animation-delay-4000"></div>
                      <div className="h-32 bg-primary/10 rounded-md"></div>
                    </div>
                    <div className="h-24 bg-primary/5 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Декоративный элемент поверх */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg border border-border/50 shadow-xl">
              <div className="bg-primary/10 p-2 rounded-full mb-2 w-10 h-10 flex items-center justify-center text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">Современный дизайн</p>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg border border-border/50 shadow-xl">
              <div className="text-sm font-medium mb-1">Разработка</div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="h-1.5 w-16 bg-gradient-to-r from-green-500 to-primary/50 rounded-full"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Прогресс проекта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
