import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

interface ServicesGridProps {
  services?: Service[];
  onProjectSelect?: (projectId: string) => void;
}

const defaultServices: Service[] = [
  {
    id: "1",
    title: "Excel Projects",
    description:
      "Advanced data analysis and visualization using Excel, including financial modeling, dashboards, and automation with VBA.",
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "View Projects",
  },
  {
    id: "2",
    title: "R Analytics",
    description:
      "Statistical analysis, data visualization, and machine learning projects implemented in R with packages like ggplot2 and tidyverse.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "See Analysis",
  },
  {
    id: "3",
    title: "SQL Database",
    description:
      "Database design, complex queries, and data manipulation projects showcasing advanced SQL skills and database optimization.",
    imageUrl:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "Explore DB Work",
  },
];

const ServicesGrid = ({
  services = defaultServices,
  onProjectSelect = (projectId) => console.log(`Selected project ${projectId}`),
}: ServicesGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true });

  const scrollGrid = (direction: "left" | "right") => {
    if (gridRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      gridRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full min-h-screen py-24 relative scroll-mt-20 flex items-center bg-black"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              id="projects-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
              tabIndex={0}
            >
              My Projects
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light">
              Explore my portfolio of data analysis and visualization projects
              across different technologies.
            </p>
          </motion.div>

          <div className="relative px-4 md:px-8">
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative"
              role="list"
              aria-label="Projects grid"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    ctaText={service.ctaText}
                    onCtaClick={() => onProjectSelect(service.id)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="hidden md:flex justify-between items-center absolute -left-4 -right-4 top-1/2 -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollGrid("left")}
                className="bg-black/50 text-white border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                aria-label="Scroll projects left"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollGrid("right")}
                className="bg-black/50 text-white border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                aria-label="Scroll projects right"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="flex md:hidden justify-center mt-8 gap-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full transition-colors ${index === 0 ? "bg-white/80" : "bg-white/20"}`}
                  role="tab"
                  aria-selected={index === 0}
                  tabIndex={0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
