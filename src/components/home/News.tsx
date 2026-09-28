'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={false}
            animate={{ opacity: 1, y: 0 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-baseline gap-3">
                        <span className="w-16 flex-shrink-0 text-xs text-neutral-500">{item.date}</span>
                        <div className="text-sm text-neutral-700 dark:text-neutral-500">
                            <ReactMarkdown
                                components={{
                                    p: ({ children }) => <p>{children}</p>,
                                    strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                                    a: ({ ...props }) => (
                                        <a {...props} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent-dark" />
                                    ),
                                }}
                            >
                                {item.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
