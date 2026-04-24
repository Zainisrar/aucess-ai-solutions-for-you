import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aucess - We Solve Your Computer Vision Problems</title>
        <meta
          name="description"
          content="Aucess is a computer vision company helping businesses solve real-world vision problems — from object detection to video analytics. Get in touch and let's solve yours."
        />
      </Helmet>
      <Layout>
        <Hero />
        <Services />
        <Industries />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
