'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  AcademicCapIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { Github } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useMessages } from '@/lib/i18n/useMessages';

interface ProfileProps {
  author: SiteConfig['author'];
  social: SiteConfig['social'];
  features: SiteConfig['features'];
  researchInterests?: string[];
}

export default function Profile({ author, social, researchInterests }: ProfileProps) {
  const messages = useMessages();

  const socialLinks = [
    ...(social.email ? [{
      name: messages.profile.email,
      href: `mailto:${social.email}`,
      icon: EnvelopeIcon,
    }] : []),
    ...(social.google_scholar ? [{
      name: 'Google Scholar',
      href: social.google_scholar,
      icon: AcademicCapIcon,
    }] : []),
    ...(social.github ? [{
      name: 'GitHub',
      href: social.github,
      icon: Github,
    }] : []),
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="lg:sticky lg:top-28"
    >
      <div className="mx-auto mb-7 aspect-[4/5] w-full max-w-[17rem] overflow-hidden rounded-[1.15rem] border border-neutral-200 bg-neutral-100 shadow-[0_18px_55px_rgba(19,41,75,0.10)] dark:border-neutral-700">
        <Image
          src={author.avatar}
          alt={author.name}
          width={680}
          height={850}
          className="h-full w-full object-cover object-[50%_62%]"
          priority
        />
      </div>

      <div className="text-center lg:text-left">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Researcher
        </p>
        <h1 className="mb-2 font-serif text-4xl font-semibold tracking-[-0.035em] text-primary">
          {author.name}
        </h1>
        <p className="text-base font-medium leading-snug text-neutral-700 dark:text-neutral-500">
          {author.title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-neutral-500">
          {author.institution}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={name}
            title={name}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors duration-200 hover:border-accent hover:text-accent dark:border-neutral-700 dark:bg-neutral-900"
          >
            <Icon className="h-[1.1rem] w-[1.1rem]" />
          </a>
        ))}
        {social.location_url && (
          <a
            href={social.location_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.location || messages.profile.location}
            title={social.location || messages.profile.location}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors duration-200 hover:border-accent hover:text-accent dark:border-neutral-700 dark:bg-neutral-900"
          >
            <MapPinIcon className="h-[1.1rem] w-[1.1rem]" />
          </a>
        )}
      </div>

      {researchInterests && researchInterests.length > 0 && (
        <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-700">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            {messages.profile.researchInterests}
          </h2>
          <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-500">
            {researchInterests.map((interest) => (
              <li key={interest} className="flex items-start gap-2.5">
                <span className="mt-[0.48rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.aside>
  );
}
