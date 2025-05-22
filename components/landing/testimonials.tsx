import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechStart',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    content: 'Dispersal has transformed how our team handles development tasks. The AI agents are incredibly efficient.',
    stars: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    content: 'The multi-agent workflows have saved us countless hours of manual work. Highly recommended!',
    stars: 5
  },
  {
    name: 'Emily Thompson',
    role: 'Product Manager',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    content: 'Integrating Dispersal into our workflow was seamless. The AI teams are incredibly capable.',
    stars: 5
  }
];

export function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by developers worldwide
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="mb-4 flex items-center gap-x-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-900 flex-grow">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-12 w-12 rounded-full bg-gray-50"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}