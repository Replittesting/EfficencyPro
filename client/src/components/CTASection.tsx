import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div 
          className="max-w-5xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to transform your business?</h2>
              <p className="text-white/90 text-lg mb-8">
                Let's discuss how our automation and digital presence solutions can help you achieve your goals.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-gray-100 font-bold"
                size="lg"
              >
                Get Started
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Business technology and automation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
