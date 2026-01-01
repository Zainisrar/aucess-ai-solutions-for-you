import { motion } from "framer-motion";

const technologies = [
  { name: "TensorFlow", category: "ML Framework" },
  { name: "PyTorch", category: "ML Framework" },
  { name: "OpenAI GPT", category: "Large Language Model" },
  { name: "Google Cloud AI", category: "Cloud Platform" },
  { name: "AWS SageMaker", category: "Cloud Platform" },
  { name: "Hugging Face", category: "NLP Models" },
  { name: "NVIDIA CUDA", category: "GPU Computing" },
  { name: "Kubernetes", category: "Orchestration" },
];

const Technologies = () => {
  return (
    <section className="py-24 bg-card/50">
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
            Powered by <span className="text-gradient">Leading Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage the most advanced AI frameworks and platforms to deliver exceptional results.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl glass text-center hover:glow-sm transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-glow-secondary/30 transition-all duration-300">
                <span className="font-display font-bold text-2xl text-gradient">
                  {tech.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-display font-semibold text-foreground mb-1">
                {tech.name}
              </h4>
              <p className="text-sm text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
