import { Button } from "@/components/ui/button";
import { ArrowRight, Code, PenTool, Stars } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-6">
            <Stars className="h-3.5 w-3.5 mr-2 text-primary" />
            <span>Создаем цифровые истории, которые запоминаются</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 max-w-3xl glow">
            Дизайн и разработка для амбициозных проектов
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Студия Krays специализируется на создании уникальных цифровых продуктов,
            которые сочетают в себе элегантный дизайн и высокотехнологичную разработку.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Button size="lg" className="purple-gradient">
              Обсудить проект <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Посмотреть портфолио
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
              <div className="p-3 bg-secondary rounded-full mb-4">
                <PenTool className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Дизайн</h3>
              <p className="text-sm text-muted-foreground text-center">
                Создаем уникальные интерфейсы, брендинг и визуальные решения
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
              <div className="p-3 bg-secondary rounded-full mb-4">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Разработка</h3>
              <p className="text-sm text-muted-foreground text-center">
                Превращаем концепции в полноценные веб-сайты и приложения
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
              <div className="p-3 bg-secondary rounded-full mb-4">
                <Stars className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Стратегия</h3>
              <p className="text-sm text-muted-foreground text-center">
                Разрабатываем цифровые стратегии для достижения бизнес-целей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
