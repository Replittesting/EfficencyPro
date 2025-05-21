import { motion } from "framer-motion";
import { RoundIcon } from "@/components/ui/icon";

interface BenefitItemProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

function BenefitItem({ number, title, description, delay }: BenefitItemProps) {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <RoundIcon>
        {number}
      </RoundIcon>
      <div className="ml-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

const benefits = [
  {
    number: "1",
    title: "Increased Productivity",
    description: "Automation reduces manual work, allowing you and your team to focus on strategic activities that drive growth."
  },
  {
    number: "2",
    title: "Cost Reduction",
    description: "Streamlined processes and automated workflows reduce operational costs and minimize resource waste."
  },
  {
    number: "3",
    title: "Enhanced Client Experience",
    description: "Automated communications, smoother processes, and professional digital presence improve client satisfaction."
  },
  {
    number: "4",
    title: "Competitive Advantage",
    description: "Stand out in your industry with optimized operations and a strong digital presence that builds trust and credibility."
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Why Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Benefits That Drive Your Success</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our solutions deliver tangible advantages that help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  number={benefit.number}
                  title={benefit.title}
                  description={benefit.description}
                  delay={index}
                />
              ))}
            </div>
          </div>

          <motion.div 
            className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Digital presence and business growth" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
