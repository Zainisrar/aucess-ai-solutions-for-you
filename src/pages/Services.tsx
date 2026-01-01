import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Eye, MessageSquare, TrendingUp, Cpu, Shield, Workflow, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models designed for your specific business needs, from recommendation systems to fraud detection.",
    features: ["Custom Model Development", "Model Training & Optimization", "MLOps & Deployment", "Continuous Learning"],
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions that understand, interpret, and generate human language with remarkable accuracy.",
    features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Document Processing", "Language Translation"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Visual AI that can see, understand, and analyze images and videos for actionable insights.",
    features: ["Object Detection", "Facial Recognition", "Quality Inspection", "Medical Imaging"],
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Data-driven predictions that help you anticipate trends, behaviors, and outcomes.",
    features: ["Demand Forecasting", "Risk Assessment", "Customer Behavior", "Market Analysis"],
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
    features: ["API Development", "Legacy System Integration", "Cloud Migration", "Real-time Processing"],
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Protect your systems and data with AI-powered security solutions.",
    features: ["Threat Detection", "Anomaly Detection", "Fraud Prevention", "Access Control"],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Intelligent automation that streamlines operations and reduces manual work.",
    features: ["Workflow Automation", "Document Processing", "Email Classification", "Data Entry"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure to power your AI initiatives.",
    features: ["Data Pipeline Design", "ETL Processes", "Data Warehousing", "Real-time Streaming"],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Machine Learning, NLP, Computer Vision | Aucess</title>
        <meta
          name="description"
          content="Explore our comprehensive AI services including Machine Learning, NLP, Computer Vision, Predictive Analytics, and more. Custom solutions for your business."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive AI solutions tailored to transform every aspect of your business
                and unlock unprecedented growth opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-2xl glass gradient-border hover:bg-secondary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 gradient-border"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Need a Custom <span className="text-gradient">Solution?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of AI experts is ready to discuss your unique requirements and build
                a tailored solution that fits your business perfectly.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServicesPage;
