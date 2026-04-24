import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Eye, ScanFace, Boxes, Camera, Activity, ShieldCheck, Car, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Eye,
    title: "Object Detection & Tracking",
    description: "Detect, classify, and track objects in real time across images and video streams.",
    features: ["YOLO & DETR Models", "Multi-object Tracking", "Edge Deployment", "Custom Training"],
  },
  {
    icon: ScanFace,
    title: "Facial Recognition",
    description: "Secure facial recognition and verification with industry-leading accuracy and liveness detection.",
    features: ["Face Verification", "Liveness Detection", "Identity Matching", "Privacy-first Design"],
  },
  {
    icon: Boxes,
    title: "Image Segmentation",
    description: "Pixel-accurate semantic and instance segmentation for granular visual understanding.",
    features: ["Semantic Segmentation", "Instance Segmentation", "Panoptic Models", "Mask R-CNN"],
  },
  {
    icon: Camera,
    title: "Video Analytics",
    description: "Extract events, behaviors, and insights from live and recorded video at scale.",
    features: ["Event Detection", "Behavior Analysis", "Heatmaps", "People Counting"],
  },
  {
    icon: Activity,
    title: "Industrial Quality Inspection",
    description: "Automated defect detection on production lines using high-speed visual inspection.",
    features: ["Defect Detection", "Anomaly Detection", "Surface Inspection", "Assembly Verification"],
  },
  {
    icon: ShieldCheck,
    title: "Smart Surveillance",
    description: "Intelligent surveillance with anomaly, intrusion, and safety incident detection.",
    features: ["Intrusion Alerts", "PPE Compliance", "Crowd Analytics", "License Plate Recognition"],
  },
  {
    icon: Stethoscope,
    title: "Medical Imaging",
    description: "AI-assisted analysis of X-rays, MRIs, CT scans, and pathology slides.",
    features: ["Lesion Detection", "Organ Segmentation", "DICOM Pipelines", "Clinical Validation"],
  },
  {
    icon: Car,
    title: "Autonomous Vision",
    description: "Perception systems for autonomous vehicles, drones, and robotics platforms.",
    features: ["Lane Detection", "Depth Estimation", "SLAM Integration", "Sensor Fusion"],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Computer Vision Services - Detection, Segmentation, Video Analytics | Aucess</title>
        <meta
          name="description"
          content="Explore Aucess computer vision services: object detection, facial recognition, image segmentation, video analytics, quality inspection, medical imaging, and more."
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
                Our <span className="text-gradient">Vision Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Production-grade computer vision solutions, custom-built to give your business eyes that
                see, understand, and act.
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
                Need a Custom <span className="text-gradient">Vision Solution?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our computer vision engineers are ready to discuss your use case and design a tailored
                pipeline that fits your environment, hardware, and goals.
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
