import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aucess - AI-Powered Solutions for Tomorrow's Challenges</title>
        <meta
          name="description"
          content="Aucess delivers cutting-edge artificial intelligence solutions that transform businesses, automate processes, and unlock new possibilities. Machine Learning, NLP, Computer Vision & more."
        />
      </Helmet>
      <Layout>
        <Hero />
        <Services />
        <Technologies />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
