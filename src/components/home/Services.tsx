import { motion } from "framer-motion";
import { Eye, ScanFace, Boxes, Camera, Activity, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Eye,
    title: "Object Detection",
    description:
      "Real-time detection and localization of objects across images and video streams with high precision.",
  },
  {
    icon: ScanFace,
    title: "Facial Recognition",
    description:
      "Secure, accurate facial recognition and verification for identity, access, and personalization.",
  },
  {
    icon: Boxes,
    title: "Image Segmentation",
    description:
      "Pixel-level segmentation that separates and classifies every region of an image with clarity.",
  },
  {
    icon: Camera,
    title: "Video Analytics",
    description:
      "Analyze live and recorded video to extract insights, track activity, and monitor events at scale.",
  },
  {
    icon: Activity,
    title: "Quality Inspection",
    description:
      "Automated visual inspection for manufacturing, catching defects faster than the human eye.",
  },
  {
    icon: ShieldCheck,
    title: "Surveillance & Safety",
    description:
      "Intelligent surveillance systems that detect anomalies, intrusions, and safety incidents in real time.",
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
            Our <span className="text-gradient">Vision Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end computer vision capabilities engineered to turn pixels into actionable intelligence.
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
            <Link to="/services">View All Solutions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
