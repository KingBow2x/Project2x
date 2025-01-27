import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  onSubmit?: (data: ContactFormData) => void;
  title?: string;
  subtitle?: string;
}

const ContactSection = ({
  onSubmit = (data) => console.log("Form submitted:", data),
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
}: ContactSectionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  return (
    <section className="w-full py-16 bg-black/[0.96]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-black/80 text-white border-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
              <p className="text-gray-600">{subtitle}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-sm text-red-500">
                      Name is required
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      Valid email is required
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="w-full min-h-[150px]"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500">
                      Message is required
                    </span>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
