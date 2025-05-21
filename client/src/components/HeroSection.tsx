import HeroVideo from "@/assets/HeroVideo.mp4";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative pt-20">
      <div className="img-gradient w-full relative">
        <video 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[90vh] object-cover"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute inset-0 flex items-center z-10">
        <div className="container-custom">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.span 
              className="text-accent font-semibold text-lg mb-3 block"
              variants={fadeIn}
            >
              Business Automation & Digital Solutions
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={fadeIn}
            >
              Minimizing Effort, <br />
              <span className="text-accent">Maximizing Results</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 max-w-lg"
              variants={fadeIn}
            >
              We help professionals automate tedious processes and build a powerful digital presence, so you can focus on what truly matters.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={fadeIn}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection("services")}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Explore Services
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-white hover:bg-gray-100 text-primary border-white"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
