import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

interface ServicesGridProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Custom web solutions built with modern technologies and best practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "Learn More",
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that enhance digital experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "View Portfolio",
  },
  {
    id: "3",
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ctaText: "Discover More",
  },
];

const ServicesGrid = ({ services = defaultServices }: ServicesGridProps) => {
  return (
    <section className="w-full py-24 bg-black/[0.96]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we can help transform your business with our
            comprehensive range of services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                onCtaClick={() => console.log(`Clicked on ${service.title}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
