import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const techCategories = [
  {
    title: "Vision Frameworks & Libraries",
    technologies: [
      { name: "OpenCV", description: "The de-facto open-source library for classical computer vision" },
      { name: "PyTorch", description: "Flexible deep learning framework powering modern vision research" },
      { name: "TensorFlow", description: "Production-grade ML framework with rich vision tooling" },
      { name: "MediaPipe", description: "Google's cross-platform real-time perception pipelines" },
    ],
  },
  {
    title: "Detection & Segmentation Models",
    technologies: [
      { name: "YOLOv8", description: "State-of-the-art real-time object detection" },
      { name: "Detectron2", description: "Meta's modular detection and segmentation library" },
      { name: "SAM", description: "Segment Anything — universal image segmentation" },
      { name: "DINOv2", description: "Self-supervised vision foundation model" },
    ],
  },
  {
    title: "Deployment & Acceleration",
    technologies: [
      { name: "NVIDIA CUDA", description: "GPU computing platform for accelerated training and inference" },
      { name: "TensorRT", description: "High-performance deep learning inference on NVIDIA GPUs" },
      { name: "ONNX Runtime", description: "Cross-platform model inference and optimization" },
      { name: "OpenVINO", description: "Intel's toolkit for optimized vision inference at the edge" },
    ],
  },
  {
    title: "Infrastructure & MLOps",
    technologies: [
      { name: "Kubernetes", description: "Container orchestration for scalable vision deployments" },
      { name: "Docker", description: "Containerization for reproducible vision pipelines" },
      { name: "Triton Server", description: "NVIDIA's high-performance model serving" },
      { name: "MLflow", description: "End-to-end vision model lifecycle management" },
    ],
  },
];

const TechnologiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Computer Vision Technologies - OpenCV, PyTorch, YOLO & More | Aucess</title>
        <meta
          name="description"
          content="Discover the cutting-edge computer vision technologies we use including OpenCV, PyTorch, YOLO, SAM, TensorRT, and more."
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
                Our <span className="text-gradient">Vision Stack</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We combine the most advanced computer vision frameworks, models, and accelerators to ship
                fast, reliable, production-grade vision systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tech Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {techCategories.map((category) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
                    {category.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group p-6 rounded-2xl glass gradient-border hover:bg-secondary/30 transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-glow-secondary/30 transition-all duration-300">
                          <span className="font-display font-bold text-2xl text-gradient">
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Technologies */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why We Choose <span className="text-gradient">These Technologies</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { title: "Real-time Performance", desc: "Optimized for low-latency inference at the edge or cloud" },
                  { title: "Scalability", desc: "From a single camera to thousands of streams" },
                  { title: "Accuracy", desc: "State-of-the-art models tuned to your domain" },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl glass">
                    <h3 className="font-display text-xl font-semibold text-gradient mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TechnologiesPage;
