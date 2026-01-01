import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVentures",
    content: "Aucess transformed our data processing pipeline with their AI solutions. The results exceeded our expectations - 40% faster processing and 99% accuracy. Their team's expertise is unmatched.",
    rating: 5,
    industry: "Technology",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "HealthTech Inc",
    content: "Their NLP solution revolutionized our patient communication system. The team's expertise and dedication to quality is truly exceptional. We've seen a 60% reduction in response time.",
    rating: 5,
    industry: "Healthcare",
  },
  {
    name: "Emily Watson",
    role: "Director of Innovation",
    company: "RetailCo",
    content: "The predictive analytics platform Aucess built for us has been a game-changer. We've seen a 25% increase in sales through better inventory management and demand forecasting.",
    rating: 5,
    industry: "Retail",
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    company: "FinServe Global",
    content: "Aucess delivered an exceptional fraud detection system. Their AI solution catches 99.7% of fraudulent transactions while maintaining minimal false positives. Outstanding work.",
    rating: 5,
    industry: "Finance",
  },
  {
    name: "Amanda Foster",
    role: "Head of Operations",
    company: "LogiTech Solutions",
    content: "The computer vision system they built for our quality control has reduced defects by 80%. The ROI was evident within the first quarter. Highly recommend their services.",
    rating: 5,
    industry: "Manufacturing",
  },
  {
    name: "Robert Kim",
    role: "Chief Data Officer",
    company: "MediaMax",
    content: "Their recommendation engine increased user engagement by 45%. Aucess truly understands how to leverage AI for business growth. A pleasure to work with from start to finish.",
    rating: 5,
    industry: "Media",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "4.9/5", label: "Average Rating" },
];

const ReviewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Reviews & Testimonials | Aucess AI Solutions</title>
        <meta
          name="description"
          content="Read what our clients say about Aucess AI solutions. Discover how we've helped businesses across industries achieve remarkable results."
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
                transform with our AI solutions.
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
                AI solutions that make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                {["TechVentures", "HealthTech Inc", "RetailCo", "FinServe Global", "LogiTech", "MediaMax"].map((company) => (
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
