import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVentures",
    content: "Aucess deployed a real-time object detection pipeline that boosted throughput by 40% with 99% accuracy. Their computer vision expertise is unmatched.",
    rating: 5,
    industry: "Technology",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "MedScan Inc",
    content: "Their medical imaging models transformed our diagnostic workflow. Lesion detection accuracy and turnaround time both improved dramatically.",
    rating: 5,
    industry: "Healthcare",
  },
  {
    name: "Emily Watson",
    role: "Director of Innovation",
    company: "RetailCo",
    content: "The in-store video analytics platform Aucess built tracks shopper behavior with remarkable precision and lifted conversions by 25%.",
    rating: 5,
    industry: "Retail",
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    company: "SecureSight",
    content: "Their smart surveillance system catches anomalies in real time with minimal false positives. Outstanding computer vision engineering.",
    rating: 5,
    industry: "Security",
  },
  {
    name: "Amanda Foster",
    role: "Head of Operations",
    company: "LogiTech Solutions",
    content: "The visual quality inspection system they built reduced defects by 80%. ROI was clear within the first quarter — highly recommend.",
    rating: 5,
    industry: "Manufacturing",
  },
  {
    name: "Robert Kim",
    role: "Chief Technology Officer",
    company: "AutoDrive",
    content: "Aucess delivered a robust perception stack for our autonomous fleet — lane detection, depth, and tracking all working flawlessly.",
    rating: 5,
    industry: "Automotive",
  },
];

const stats = [
  { value: "150+", label: "Vision Projects Delivered" },
  { value: "99.7%", label: "Detection Accuracy" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "4.9/5", label: "Average Rating" },
];

const ReviewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Reviews & Testimonials | Aucess Computer Vision</title>
        <meta
          name="description"
          content="Read what our clients say about Aucess computer vision solutions. See how we've helped businesses across industries deploy vision AI."
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
                Client <span className="text-gradient">Reviews</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it. Hear from the businesses we've helped
                transform with our computer vision solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl glass gradient-border"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

                  {/* Industry Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                    <Building2 className="w-3 h-3" />
                    {testimonial.industry}
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center">
                      <span className="font-display font-bold text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Trusted by <span className="text-gradient">Industry Leaders</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                From startups to Fortune 500 companies, businesses trust Aucess to deliver
                computer vision solutions that make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                {["TechVentures", "MedScan Inc", "RetailCo", "SecureSight", "LogiTech", "AutoDrive"].map((company) => (
                  <div
                    key={company}
                    className="px-8 py-4 rounded-xl bg-secondary/50 font-display font-semibold text-muted-foreground"
                  >
                    {company}
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

export default ReviewsPage;
