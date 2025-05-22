import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Dispersal
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Your Team of AI Agents
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/sign-up">
              <Button size="lg" className="rounded-full">
                Get Started
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="rounded-full">
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}