import { motion } from "framer-motion";
import {
  Car,
  ShoppingBag,
  Zap,
  HeartPulse,
  Factory,
  Plane,
  Wrench,
  Film,
  Store,
  Bot,
  Truck,
  Warehouse,
} from "lucide-react";

const industries = [
  { name: "Automotive", icon: Car },
  { name: "Consumer Goods", icon: ShoppingBag },
  { name: "Energy & Utilities", icon: Zap },
  { name: "Healthcare & Medicine", icon: HeartPulse },
  { name: "Industrial Manufacturing", icon: Factory },
  { name: "Aerospace & Defense", icon: Plane },
  { name: "Manufacturing", icon: Wrench },
  { name: "Media & Entertainment", icon: Film },
  { name: "Retail & Service", icon: Store },
  { name: "Robotics", icon: Bot },
  { name: "Transportation", icon: Truck },
  { name: "Warehousing", icon: Warehouse },
];

const Industries = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="text-gradient">Empower</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From the factory floor to the operating room, our computer vision systems
            deliver impact across every major industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl glass gradient-border hover:bg-secondary/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-glow-secondary/10 blur-2xl group-hover:from-primary/30 transition-all duration-300" />
              <div className="relative flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base md:text-lg">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
