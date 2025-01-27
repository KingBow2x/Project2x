import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
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
      <Card className="h-full bg-white overflow-hidden flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <Button
            onClick={onCtaClick}
            variant="ghost"
            className="w-full group hover:bg-primary/5"
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
