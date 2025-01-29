import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bitcoin, FileSpreadsheet, Sparkles, Code, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FloatingParticles } from "./ui/floating-particles";

const GlowingBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 80%)`,
      }}
    />
  );
};

const ProjectCard = ({
  icon: Icon,
  title,
  description,
  content,
  tag,
  tagIcon: TagIcon,
  gradient,
  iconColor,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  content: string;
  tag?: string;
  tagIcon?: React.ElementType;
  gradient: string;
  iconColor: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <Card className="group relative overflow-hidden border-neutral-800 bg-black/50 backdrop-blur-sm transition-all hover:border-neutral-700 h-full">
        <div
          className={`absolute inset-0 ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="rounded-full border border-neutral-800 bg-neutral-900/50 p-3"
            >
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </motion.div>
            <div className="space-y-1 flex-1">
              <CardTitle className="text-xl font-bold text-white">
                {title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-400">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
          {tag && (
            <div className="flex items-center space-x-2 pt-2">
              {TagIcon && <TagIcon className="h-4 w-4 text-green-500" />}
              <span className="text-xs text-gray-400">{tag}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      icon: Bitcoin,
      title: "Bitcoin Mining & Renewable Energy",
      description: "Masters Research Project",
      content:
        "An Excel-based analysis investigating the potential role of Bitcoin mining in supporting the UK's renewable energy transition.",
      tag: "Excel Analysis",
      tagIcon: FileSpreadsheet,
      gradient:
        "bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10",
      iconColor: "text-yellow-500",
    },
    {
      icon: Code,
      title: "Machine Learning in R",
      description: "Data Science Project",
      content:
        "Statistical analysis and predictive modeling using R, focusing on environmental data and renewable energy patterns.",
      tag: "R & Statistical Analysis",
      tagIcon: Zap,
      gradient:
        "bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10",
      iconColor: "text-purple-500",
    },
    {
      icon: Sparkles,
      title: "Algorithmic Trading",
      description: "Coming Soon",
      content:
        "Developing automated trading strategies for cryptocurrency markets with a focus on sustainable energy consumption patterns.",
      tag: "In Development",
      tagIcon: Code,
      gradient:
        "bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10",
      iconColor: "text-emerald-500",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black text-white py-24"
      id="projects"
    >
      <GlowingBackground />
      <FloatingParticles />

      <motion.div
        className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-blue-500/30 mix-blend-screen"
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          mass: 0.1,
        }}
      />

      <main className="container relative mx-auto px-4 max-w-7xl">
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Exploring the intersection of technology and sustainability
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default ServicesGrid;
