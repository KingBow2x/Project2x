import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ButtonWithRipple as Button } from "./ui/button-with-ripple";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const ServiceCard = ({
  title = "Service Title",
  description = "A brief description of the service we provide to help our customers achieve their goals.",
  imageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  ctaText = "Learn More",
  onCtaClick = () => console.log("CTA clicked"),
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full bg-black/40 backdrop-blur-md text-white overflow-hidden flex flex-col border border-white/10 shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        <CardHeader className="relative z-20 -mt-8">
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-all duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto relative z-20">
          <Button
            onClick={onCtaClick}
            variant="ghost"
            className="w-full relative overflow-hidden text-white bg-white/5 hover:bg-white hover:text-black border border-white/20 transition-all duration-300"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
