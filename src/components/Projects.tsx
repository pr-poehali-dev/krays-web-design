
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Urbanify App",
      description: "Мобильное приложение для поиска архитектурных достопримечательностей города с дополненной реальностью.",
      image: "/placeholder.svg",
      tags: ["React Native", "AR", "Дизайн интерфейса"],
      highlight: true
    },
    {
      title: "Nexus Dashboard",
      description: "Аналитическая панель для мониторинга и визуализации данных в реальном времени.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Data Visualization"],
      highlight: false
    },
    {
      title: "Lumina Store",
      description: "E-commerce платформа с индивидуальным дизайном и оптимизированным пользовательским путём.",
      image: "/placeholder.svg",
      tags: ["NextJS", "Headless CMS", "UI/UX"],
      highlight: true
    },
    {
      title: "Pulse Portal",
      description: "Корпоративный портал для коммуникации и управления проектами внутри компании.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "GraphQL", "Design System"],
      highlight: false
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute top-1/3 left-0 w-1/3 h-1/2 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Наши проекты
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Отборные работы из нашего портфолио, демонстрирующие наш подход к решению бизнес-задач через дизайн и технологии.
            </p>
          </div>
          
          <Button variant="outline" className="group">
            Все проекты 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg border border-border/40 transition-all hover:border-primary/40 ${
                project.highlight ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`aspect-video md:aspect-auto ${project.highlight ? 'md:h-[400px]' : 'md:h-[300px]'} bg-card overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center opacity-70 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 max-w-md">{project.description}</p>
                
                <Button 
                  variant="ghost" 
                  className="w-fit p-0 h-auto font-medium text-primary hover:text-primary group/btn"
                >
                  Подробнее 
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
