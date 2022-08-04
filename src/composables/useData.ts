import { ITestimonial } from '@/interfaces';

export default () => {
  /**
   * Return the list of testimonials.
   *
   * @returns {ITestimonial[]} List of testimonials.
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  const getTestimonials = (): ITestimonial[] => [
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

  return { getTestimonials };
};
