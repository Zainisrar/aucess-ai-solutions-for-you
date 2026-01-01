import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const techCategories = [
  {
    title: "Machine Learning Frameworks",
    technologies: [
      { name: "TensorFlow", description: "Google's open-source ML framework for production-grade applications" },
      { name: "PyTorch", description: "Facebook's flexible deep learning platform for research and deployment" },
      { name: "Scikit-learn", description: "Essential Python library for classical machine learning algorithms" },
      { name: "Keras", description: "High-level neural network API for rapid prototyping" },
    ],
  },
  {
    title: "Large Language Models",
    technologies: [
      { name: "GPT-4", description: "OpenAI's most advanced language model for complex reasoning" },
      { name: "Claude", description: "Anthropic's safe and helpful AI assistant" },
      { name: "LLaMA", description: "Meta's open-source foundation models" },
      { name: "Gemini", description: "Google's multimodal AI model" },
    ],
  },
  {
    title: "Cloud Platforms",
    technologies: [
      { name: "AWS SageMaker", description: "Amazon's fully managed ML service" },
      { name: "Google Cloud AI", description: "Google's suite of AI and ML services" },
      { name: "Azure ML", description: "Microsoft's enterprise ML platform" },
      { name: "Vertex AI", description: "Unified ML development platform" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    technologies: [
      { name: "Kubernetes", description: "Container orchestration for scalable deployments" },
      { name: "Docker", description: "Containerization for consistent environments" },
      { name: "NVIDIA CUDA", description: "GPU computing platform for accelerated training" },
      { name: "MLflow", description: "Platform for ML lifecycle management" },
    ],
  },
];

const TechnologiesPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Technologies - TensorFlow, PyTorch, GPT & More | Aucess</title>
        <meta
          name="description"
          content="Discover the cutting-edge AI technologies we use including TensorFlow, PyTorch, GPT models, cloud platforms, and more."
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
                Our <span className="text-gradient">Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We leverage the most advanced AI frameworks, platforms, and tools to deliver
                exceptional results for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tech Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {techCategories.map((category, categoryIndex) => (
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
                  { title: "Performance", desc: "Industry-leading speed and efficiency" },
                  { title: "Scalability", desc: "Grows seamlessly with your business" },
                  { title: "Security", desc: "Enterprise-grade protection built-in" },
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
