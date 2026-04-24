import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Yann Park",
    role: "Chief Vision Scientist at VisionLabs",
    initials: "YP",
    content:
      "Aucess's detection pipeline is remarkable — DINOv2 encoder + multiscale DETR head delivering SOTA accuracy on real-world streams. Truly best-in-class engineering.",
  },
  {
    name: "Nikhila Rao",
    role: "Lead Engineer, Segment Anything Team",
    initials: "NR",
    content:
      "The way Aucess adapted SAM into a production-ready segmentation interface is the right UX. Fast, reliable, and a joy to integrate.",
  },
  {
    name: "Amjad Hassan",
    role: "CEO of EdgeAI",
    initials: "AH",
    content:
      "Software is eating the world but it still can't see it. Aucess is the vision layer for software — and it's loved by builders.",
  },
  {
    name: "Beyang Liu",
    role: "CTO of Sourcegraph Vision",
    initials: "BL",
    content:
      "We needed a defect-detection model running on factory cameras in under a week. The Aucess team shipped it with supervision pipelines and on-device inference. Outstanding.",
  },
  {
    name: "Antaripa Saha",
    role: "ML Engineer",
    initials: "AS",
    content:
      "The Aucess notebooks repo is such a resource-intense place to learn computer vision. For anyone going deeper into CV and hands-on work, you should absolutely check it out.",
  },
  {
    name: "Asim Ghanchi",
    role: "AVP of Technology at RailNet",
    initials: "AG",
    content:
      "Aucess is helping us realize value from state-of-the-art computer vision technology. Achieving lab results is easy — scaling across our network without disrupting operations is the real challenge, and they nailed it.",
  },
  {
    name: "Paul Copplestone",
    role: "CEO of CityPulse",
    initials: "PC",
    content:
      "The Aucess team built us a 'visual search engine' for our city — searching across hundreds of traffic cameras in real time. It won the world's shortest hackathon. Legends.",
  },
  {
    name: "Satya Mallick",
    role: "Founder, OpenVision",
    initials: "SM",
    content:
      "Few teams understand classical CV and modern deep learning equally well. Aucess is one of them, and it shows in the quality of every model they ship.",
  },
  {
    name: "Kentaro Wada",
    role: "Computer Vision at Mujin, Creator of Labelme",
    initials: "KW",
    content:
      "Wow — Aucess shipped exactly the segmentation tooling our robotics team needed. Their attention to data quality and labeling workflows is next level.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow-secondary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Take their <span className="text-gradient">word for it.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by pioneering computer vision researchers and startups around the world.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid mb-6 p-6 rounded-2xl glass gradient-border hover:bg-secondary/40 transition-all duration-300"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-sm text-primary-foreground">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
                <Twitter className="w-4 h-4 text-muted-foreground/60 flex-shrink-0" />
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
