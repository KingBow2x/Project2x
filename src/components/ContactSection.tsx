import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ButtonWithRipple as Button } from "./ui/button-with-ripple";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { supabase } from "@/lib/supabase";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";

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
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
}: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  return (
    <section className="w-full py-12 sm:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/95 to-black"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-[0.08] mix-blend-overlay"></div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-zinc-900/95 text-white border border-white/10 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(async (data) => {
                  try {
                    setIsSubmitting(true);
                    const { error } = await supabase
                      .from("contacts")
                      .insert([data]);

                    if (error) throw error;

                    toast({
                      title: "Message sent!",
                      description: "We'll get back to you soon.",
                    });

                    reset();
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: "Something went wrong. Please try again.",
                      variant: "destructive",
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                })}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white/30 transition-colors"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-sm font-medium text-red-400">
                      Name is required
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white/30 transition-colors"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <span className="text-sm font-medium text-red-400">
                      Valid email is required
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="w-full min-h-[150px] bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white/30 transition-colors"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-sm font-medium text-red-400">
                      Message is required
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full relative overflow-hidden text-white border-0 shadow-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-500"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
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
