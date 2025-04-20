import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const projectsData = [
  {
    id: 1,
    title: "Nova Finance",
    category: "Веб-приложение",
    description: "Современный финансовый портал с продвинутой аналитикой и элегантным дизайном",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Lumina",
    category: "Брендинг",
    description: "Разработка фирменного стиля и брендбука для технологического стартапа",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "EcoTrack",
    category: "Мобильное приложение",
    description: "Приложение для отслеживания экологического следа с интуитивным интерфейсом",
    image: "/placeholder.svg",
  },
];

const Projects = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Последние проекты
            </h2>
            <p className="text-muted-foreground max-w-md">
              Взгляните на работы, которые мы создали для наших клиентов. Каждый проект уникален и отражает индивидуальность бренда.
            </p>
          </div>
          <Button variant="link" className="hidden md:flex items-center text-primary mt-4 md:mt-0">
            Все проекты <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary flex items-center">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="link" className="text-primary flex items-center">
            Все проекты <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
