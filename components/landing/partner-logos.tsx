import { motion } from 'framer-motion';

const partners = [
  { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' },
  { name: 'Cursor', logo: 'https://cursor.sh/brand/logo-light.svg' },
  // Add more partner logos as needed
];

export function PartnerLogos() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partners.map((partner, index) => (
            <motion.img
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={partner.logo}
              alt={partner.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}