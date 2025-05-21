import { motion } from "framer-motion";
import { RoundIcon } from "@/components/ui/icon";
import { ArrowRight } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  showArrow?: boolean;
  delay: number;
}

function ProcessStep({ number, title, description, showArrow = false, delay }: ProcessStepProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
    >
      <RoundIcon>{number}</RoundIcon>
      <h3 className="text-xl font-bold mb-3 mt-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      
      {showArrow && (
        <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
          <ArrowRight className="text-primary text-2xl" />
        </div>
      )}
    </motion.div>
  );
}

const processSteps = [
  {
    number: "1",
    title: "Discover",
    description: "We start by understanding your business, challenges, and goals through in-depth consultation."
  },
  {
    number: "2",
    title: "Plan",
    description: "We develop a tailored strategy and solution blueprint that addresses your specific needs."
  },
  {
    number: "3",
    title: "Implement",
    description: "We build, configure, and deploy solutions with regular updates and client feedback."
  },
  {
    number: "4",
    title: "Optimize",
    description: "We provide ongoing support, refinement, and optimization to ensure long-term success."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">A Simple, Effective Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We follow a structured approach to ensure successful outcomes for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              showArrow={index < processSteps.length - 1}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
