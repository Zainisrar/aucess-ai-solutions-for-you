import { motion } from "framer-motion";
import automotive from "@/assets/industries/automotive.jpg";
import consumerGoods from "@/assets/industries/consumer-goods.jpg";
import energy from "@/assets/industries/energy.jpg";
import healthcare from "@/assets/industries/healthcare.jpg";
import industrial from "@/assets/industries/industrial.jpg";
import aerospace from "@/assets/industries/aerospace.jpg";
import manufacturing from "@/assets/industries/manufacturing.jpg";
import media from "@/assets/industries/media.jpg";
import retail from "@/assets/industries/retail.jpg";
import robotics from "@/assets/industries/robotics.jpg";
import transportation from "@/assets/industries/transportation.jpg";
import warehousing from "@/assets/industries/warehousing.jpg";

const industries = [
  { name: "Automotive", image: automotive },
  { name: "Consumer Goods", image: consumerGoods },
  { name: "Energy & Utilities", image: energy },
  { name: "Healthcare & Medicine", image: healthcare },
  { name: "Industrial Manufacturing", image: industrial },
  { name: "Aerospace & Defense", image: aerospace },
  { name: "Manufacturing", image: manufacturing },
  { name: "Media & Entertainment", image: media },
  { name: "Retail & Service", image: retail },
  { name: "Robotics", image: robotics },
  { name: "Transportation", image: transportation },
  { name: "Warehousing", image: warehousing },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={industry.image}
                alt={`${industry.name} computer vision example`}
                loading="lazy"
                width={768}
                height={512}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Bottom gradient for label legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-display font-semibold text-foreground text-sm md:text-base drop-shadow-lg">
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
