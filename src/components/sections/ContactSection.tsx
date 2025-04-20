
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
