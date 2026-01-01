import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI, constantly exploring new frontiers.",
  },
  {
    icon: Lightbulb,
    title: "Client Success",
    description: "Your success is our success. We measure our achievements by the impact we create for you.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, fostering open communication and partnership.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver nothing but the highest quality solutions, backed by rigorous testing.",
  },
];

const team = [
  { name: "Dr. Alexandra Kim", role: "CEO & Founder", specialty: "AI Strategy" },
  { name: "Marcus Chen", role: "CTO", specialty: "Machine Learning" },
  { name: "Priya Sharma", role: "Head of Research", specialty: "NLP" },
  { name: "James Wilson", role: "Lead Engineer", specialty: "Computer Vision" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Aucess - Pioneering AI Innovation</title>
        <meta
          name="description"
          content="Learn about Aucess, our mission to democratize AI, and the expert team behind our cutting-edge solutions."
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
                About <span className="text-gradient">Aucess</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to democratize artificial intelligence and make its
                transformative power accessible to businesses of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2020, Aucess emerged from a simple yet powerful vision: to bridge
                    the gap between cutting-edge AI research and real-world business applications.
                  </p>
                  <p>
                    Our founders, with decades of combined experience in AI and machine learning,
                    recognized that while AI technology was advancing rapidly, many businesses
                    struggled to harness its potential.
                  </p>
                  <p>
                    Today, we've helped over 150 companies across diverse industries transform
                    their operations with intelligent AI solutions, from predictive analytics to
                    natural language processing.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl glass gradient-border overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-glow-secondary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display text-7xl font-bold text-gradient mb-2">5+</div>
                      <div className="text-xl text-muted-foreground">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds driving AI innovation at Aucess
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl glass gradient-border text-center hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-display font-bold text-2xl text-primary-foreground">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
