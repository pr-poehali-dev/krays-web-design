
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
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
];

const TestimonialsSection = () => {
  return (
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
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
