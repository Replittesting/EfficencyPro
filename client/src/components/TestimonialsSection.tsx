import { motion } from "framer-motion";
import { Star, StarHalf, User } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  text: string;
  name: string;
  position: string;
  delay: number;
}

function TestimonialCard({ rating, text, name, position, delay }: TestimonialCardProps) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-amber-300 text-amber-300 h-4 w-4" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-amber-300 text-amber-300 h-4 w-4" />);
    }

    return stars;
  };

  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-amber-300 mr-1 flex">
          {renderStars()}
        </div>
        <span className="ml-2">{rating.toFixed(1)}</span>
      </div>
      <p className="italic mb-6 text-white/90">
        "{text}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          <User className="h-6 w-6" />
        </div>
        <div className="ml-3">
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm opacity-80">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    rating: 5.0,
    text: "The automation solutions implemented by EfficiencyPro saved my team 15+ hours every week. The digital presence work has brought in a steady stream of new clients. Truly transformative for our practice.",
    name: "Sarah Johnson",
    position: "Financial Advisor"
  },
  {
    rating: 5.0,
    text: "Before working with EfficiencyPro, we were drowning in manual processes. Now, everything from client onboarding to reporting is automated. Our digital presence has completely transformed as well.",
    name: "Michael Rodriguez",
    position: "Marketing Agency Owner"
  },
  {
    rating: 4.5,
    text: "Working with EfficiencyPro was a game-changer for my law practice. They simplified complex processes, automated client communication, and built a website that consistently attracts high-value clients.",
    name: "Jennifer Wilson",
    position: "Attorney"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold uppercase tracking-wider">Client Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-90">
            Hear from professionals who have transformed their businesses with our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
