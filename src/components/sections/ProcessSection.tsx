
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Layers, Rocket } from "lucide-react";

const processSteps = [
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
];

const ProcessSection = () => {
  return (
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
          {processSteps.map((step, index) => (
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
  );
};

export default ProcessSection;
