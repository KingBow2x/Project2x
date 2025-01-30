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

interface ProjectCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  content: string;
  tag?: string;
  tagIcon?: React.ElementType;
  link?: string;
  gradient: string;
  iconColor: string;
  index: number;
  inView: boolean;
}

const ProjectCard = ({
  icon: Icon,
  title,
  description,
  content,
  tag,
  tagIcon: TagIcon,
  link,
  gradient,
  iconColor,
  index,
  inView,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative will-change-transform"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onClick={() =>
          link && window.open(link, "_blank", "noopener,noreferrer")
        }
        className="cursor-pointer"
      >
        <Card className="group relative overflow-hidden border-neutral-800 bg-black/50 backdrop-blur-sm transition-all hover:border-neutral-700 h-[320px] flex flex-col">
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
          <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
            <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
            <div className="flex items-center justify-between">
              {tag && (
                <div className="flex items-center space-x-2">
                  {TagIcon && <TagIcon className="h-4 w-4 text-green-500" />}
                  <span className="text-xs text-gray-400">{tag}</span>
                </div>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View →
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px",
  });

  const projects = [
    {
      icon: Bitcoin,
      title: "Bitcoin Mining & Renewable Energy",
      description: "Masters Research Project",
      content:
        "Investigating if bitcoin mining can be leveraged to assist the renewable energy transition in the UK by utilising currently curtailed wind energy. View my complete research project in PDF format.",
      link: "https://drive.google.com/file/d/1_wzJsdqmhCooCtdzfL9oqms4pgfG2pov/view?usp=sharing",
      tag: "Excel Analysis",
      tagIcon: FileSpreadsheet,
      gradient:
        "bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10",
      iconColor: "text-yellow-500",
    },
    {
      icon: Code,
      title: "Bank Churn Analysis in R",
      description: "Decision Tree Analysis",
      content:
        "Implemented decision tree analysis to predict customer churn in banking, featuring comprehensive data preprocessing, k-fold cross-validation, and detailed performance metrics including accuracy, precision, and recall.",
      tag: "R & Statistical Analysis",
      tagIcon: Zap,
      gradient:
        "bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10",
      iconColor: "text-purple-500",
      link: "https://github.com/KingBow2x/BANK-CHURN-DECISION-TREE-ANALYSIS",
    },
    {
      icon: Sparkles,
      title: "Algorithmic Trading",
      description: "Coming Soon",
      content:
        "Learning to implement automated trading systems for cryptocurrency markets.",
      tag: "In Development",
      tagIcon: Code,
      gradient:
        "bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10",
      iconColor: "text-emerald-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900/95 to-black text-white py-16 min-h-[800px]"
      id="projects"
    >
      <GlowingBackground />
      <FloatingParticles />
      <main className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-2">
            My Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default ServicesGrid;
