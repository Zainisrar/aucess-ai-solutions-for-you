import { motion } from "framer-motion";
import { Brain, Eye, MessageSquare, TrendingUp, Cpu, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Custom ML models trained on your data to solve complex business problems and drive intelligent automation.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Advanced NLP solutions for chatbots, sentiment analysis, document processing, and language understanding.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Image recognition, object detection, and visual analytics that bring intelligence to visual data.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Data-driven forecasting and analytics that help you make informed decisions and stay ahead.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description:
      "Seamless integration of AI capabilities into your existing systems and workflows.",
  },
  {
    icon: Shield,
    title: "AI Security",
    description:
      "Robust AI-powered security solutions to protect your data and systems from threats.",
  },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI solutions tailored to transform your business and unlock new opportunities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl glass gradient-border hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
