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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-sm text-gray-800 overflow-hidden flex flex-col border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <Button
            onClick={onCtaClick}
            variant="ghost"
            className="w-full relative overflow-hidden text-black bg-white hover:bg-black hover:text-white border border-black/20 transition-all duration-300"
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
