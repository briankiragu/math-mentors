/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ITestimonial } from '@/interfaces';

const testimonials: ITestimonial[] = [
  {
    id: 1,
    quote: 'This is the quote',
    name: 'Brian',
    title: 'coder',
    created_at: new Date().toISOString(),
    updated_at: null,
  },
  {
    id: 2,
    quote: 'This is the quote',
    name: 'Nick',
    title: 'coder',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    quote: 'This is the quote',
    name: 'Lawrence',
    title: 'manager',
    created_at: new Date().toISOString(),
    updated_at: null,
  },
];

export default testimonials;
