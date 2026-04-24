import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aucess - Computer Vision Solutions for Modern Business</title>
        <meta
          name="description"
          content="Aucess delivers cutting-edge computer vision solutions: object detection, facial recognition, image segmentation, video analytics, quality inspection, and more."
        />
      </Helmet>
      <Layout>
        <Hero />
        <Services />
        <Industries />
        <Technologies />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
