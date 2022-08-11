/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ITestimonial } from '@/interfaces';

const testimonials: ITestimonial[] = [
  {
    id: 1,
    message: 'This is the message',
    author: 'Brian',
    author_profession: 'coder',
    created_at: new Date().toISOString(),
    updated_at: null,
  },
  {
    id: 2,
    message: 'This is the message',
    author: 'Nick',
    author_profession: 'coder',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    message: 'This is the message',
    author: 'Lawrence',
    author_profession: 'manager',
    created_at: new Date().toISOString(),
    updated_at: null,
  },
];

export default testimonials;
