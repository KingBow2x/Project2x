import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bitcoin, FileSpreadsheet, Sparkles } from "lucide-react";
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
  children,
  index,
}: {
  children: React.ReactNode;
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
      {children}
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

      <main className="container relative mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            My Projects
          </h2>
          <p className="text-lg text-gray-400">
            Exploring the intersection of technology and sustainability
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <ProjectCard index={0}>
            <Card className="group relative overflow-hidden border-neutral-800 bg-black/50 backdrop-blur-sm transition-all hover:border-neutral-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border border-neutral-800 bg-neutral-900/50 p-2"
                  >
                    <Bitcoin className="h-5 w-5 text-yellow-500" />
                  </motion.div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">
                      Bitcoin Mining & Renewable Energy
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-400">
                      Masters Research Project
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  An Excel-based analysis investigating the potential role of
                  Bitcoin mining in supporting the UK's renewable energy
                  transition. Coming soon.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <FileSpreadsheet className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-gray-500">Excel Analysis</span>
                </div>
              </CardContent>
            </Card>
          </ProjectCard>

          <ProjectCard index={1}>
            <Card className="group relative overflow-hidden border-neutral-800 bg-black/50 backdrop-blur-sm transition-all hover:border-neutral-700">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border border-neutral-800 bg-neutral-900/50 p-2"
                  >
                    <Sparkles className="h-5 w-5 text-purple-500" />
                  </motion.div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">Coming Soon</CardTitle>
                    <CardDescription className="text-sm text-gray-400">
                      Future Project
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  Another exciting project in development. Stay tuned for
                  updates.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-xs text-gray-500">In Development</span>
                </div>
              </CardContent>
            </Card>
          </ProjectCard>
        </div>
      </main>
    </section>
  );
};

export default ServicesGrid;
