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
      className="w-full py-24 relative scroll-mt-20"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.96] via-black/[0.96] via-50% to-black/80 to-100%"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-[0.02] mix-blend-overlay"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left mb-24 pl-4"
          >
            <h2
              id="projects-title"
              className="text-5xl font-bold mb-6 text-white"
              tabIndex={0}
            >
              My Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl font-normal">
              Explore my portfolio of data analysis and visualization projects
              across different technologies.
            </p>
          </motion.div>

          <div className="relative">
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto pb-4 scrollbar-hide relative"
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
            <div className="hidden md:flex justify-between items-center absolute -left-12 -right-12 top-1/2 -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollGrid("left")}
                className="bg-white/80 shadow-lg backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
                aria-label="Scroll projects left"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollGrid("right")}
                className="bg-white/80 shadow-lg backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
                aria-label="Scroll projects right"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="flex md:hidden justify-center mt-4 gap-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full transition-colors ${index === 0 ? "bg-primary" : "bg-gray-300"}`}
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
