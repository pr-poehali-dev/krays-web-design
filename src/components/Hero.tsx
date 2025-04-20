
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/4 bg-accent/10 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent purple-gradient glow">
            Преображаем идеи в цифровую реальность
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы создаем впечатляющие цифровые продукты, которые выделяют ваш бренд и вовлекают вашу аудиторию
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="purple-gradient">
              Начать проект <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary hover:bg-primary/10">
              Изучить портфолио
            </Button>
          </div>
          
          {/* Клиенты */}
          <div className="mt-16 md:mt-24">
            <p className="text-sm font-medium text-muted-foreground mb-6">
              Нам доверяют компании по всему миру
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">ЛОГОТИП {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративная иллюстрация */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
        <div className="aspect-[16/9] w-full bg-gradient-to-b from-background to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;
