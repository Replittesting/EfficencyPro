import { motion } from "framer-motion";
import { 
  Bot, 
  Code, 
  Megaphone, 
  Wrench, 
  PieChart, 
  Users 
} from "lucide-react";
import { Icon } from "@/components/ui/icon";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="p-6">
        <Icon>{icon}</Icon>
        <h3 className="text-xl font-bold mb-3 mt-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-primary font-medium inline-flex items-center"
        >
          Learn more
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Process Automation",
    description: "Identify and automate repetitive tasks across your business, from data entry to client communications and reporting."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Website Development",
    description: "Create professional, responsive websites that showcase your expertise and convert visitors into clients."
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Develop strategic campaigns that increase your visibility online and attract your ideal clients."
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Custom Software Solutions",
    description: "Develop tailored applications and tools to address your specific business challenges and requirements."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Data Analytics",
    description: "Transform your business data into actionable insights with custom dashboards and reporting solutions."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Business Consulting",
    description: "Get expert guidance on optimizing your workflows, technology stack, and digital strategy."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Solutions for Modern Professionals</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer a range of services designed to streamline your business operations and enhance your professional image.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
