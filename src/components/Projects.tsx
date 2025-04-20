
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Веб-платформа для EdTech стартапа",
    description: "Разработка масштабируемой платформы онлайн-обучения с интерактивными элементами",
    image: "/placeholder.svg",
    category: "Веб-разработка"
  },
  {
    id: 2,
    title: "Редизайн интерфейса банковского приложения",
    description: "Улучшение пользовательского опыта и внедрение современного визуального стиля",
    image: "/placeholder.svg",
    category: "UI/UX Дизайн"
  },
  {
    id: 3,
    title: "Мобильное приложение для фитнес-трекинга",
    description: "Создание нативного приложения с функциями отслеживания тренировок и персонализации",
    image: "/placeholder.svg",
    category: "Мобильная разработка"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      {/* Декоративный элемент */}
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Наши проекты
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Каждый проект — это уникальное решение, созданное с учетом бизнес-целей 
              и потребностей пользователей нашего клиента.
            </p>
          </div>
          <Button variant="link" className="hidden md:flex items-center mt-4 md:mt-0 text-primary">
            Смотреть все проекты <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur-sm">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <Button variant="ghost" size="sm" className="mt-4 px-0 text-primary">
                  Подробнее <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" className="border-primary hover:bg-primary/10">
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
