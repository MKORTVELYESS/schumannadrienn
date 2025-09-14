// components/ServiceCard.tsx
import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  items,
  delay = 0,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      onClick={() => setExpanded(!expanded)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-2xl bg-white p-6 shadow flex flex-col"
    >
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-3 text-sm text-gray-600 flex-1">{description}</p>
      <ul className="mt-4 text-sm text-gray-500 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.article>
  );
}
