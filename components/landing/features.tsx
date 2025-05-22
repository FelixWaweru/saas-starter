import { motion } from 'framer-motion';
import { 
  Users, 
  Scale, 
  Puzzle, 
  Robot, 
  UserPlus 
} from 'lucide-react';

const features = [
  {
    name: 'Multi Agent Workflows',
    description: 'Coordinate multiple AI agents to handle complex tasks seamlessly.',
    icon: Users
  },
  {
    name: 'Scalable AI Teams',
    description: 'Grow your AI workforce as your needs expand.',
    icon: Scale
  },
  {
    name: 'Integration with Your Tools',
    description: 'Connect with your favorite development tools and platforms.',
    icon: Puzzle
  },
  {
    name: 'Inter-Agent Collaboration',
    description: 'Agents that work together and assist each other automatically.',
    icon: Robot
  },
  {
    name: 'Build Your AI Team',
    description: 'Create and customize your own team of specialized AI agents.',
    icon: UserPlus
  }
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to automate your development
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}