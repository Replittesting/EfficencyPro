import { motion } from "framer-motion";
import { Clock, TrendingUp, Globe } from "lucide-react";
import { Icon } from "@/components/ui/icon";

export function ValueProposition() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose EfficiencyPro?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            In today's fast-paced business world, time is your most valuable asset. Our mission is to help you reclaim that time through thoughtful automation and strategic digital presence building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 gradient-text"
              variants={fadeInUp}
            >
              We Transform How You Work
            </motion.h3>

            <div className="space-y-6">
              <motion.div className="flex" variants={fadeInUp}>
                <Icon>
                  <Clock className="h-6 w-6" />
                </Icon>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-foreground">Save Valuable Time</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Automate repetitive tasks that drain your productivity and focus on high-value activities.</p>
                </div>
              </motion.div>

              <motion.div className="flex" variants={fadeInUp}>
                <Icon>
                  <TrendingUp className="h-6 w-6" />
                </Icon>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-foreground">Increase Efficiency</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Streamline your operations with custom workflows designed specifically for your business needs.</p>
                </div>
              </motion.div>

              <motion.div className="flex" variants={fadeInUp}>
                <Icon>
                  <Globe className="h-6 w-6" />
                </Icon>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-foreground">Build Your Digital Brand</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Establish a compelling online presence that attracts clients and builds credibility in your industry.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Business automation in action" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
